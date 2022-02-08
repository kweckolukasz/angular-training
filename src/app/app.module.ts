import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerItemComponent } from './presentation/server/server-item/ServerItem.component';
import { ServersComponent } from './presentation/servers/servers.component';
import { StatusItemComponent } from './presentation/status/StatusItem.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './presentation/navbar/Navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { GETS_SERVERS } from './domain/getsServers';
import { HttpServersService } from './infrastructure/http-servers.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditServerDialogComponent } from './presentation/dialogs/addEdit-server-dialog/addEdit-server-dialog.component';
import { from } from 'rxjs';
import { GridComponent } from './presentation/grid/grid.component';

const routes: Routes = [
  { path: 'servers-list', component: ServersComponent },
  { path: 'grid-example', component: GridComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ServerItemComponent,
    ServersComponent,
    StatusItemComponent,
    NavbarComponent,
    AddEditServerDialogComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    { provide: GETS_SERVERS, useClass: HttpServersService },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
