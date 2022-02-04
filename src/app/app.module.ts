import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerItemComponent } from './presentation/server/server-item/ServerItem.component';
import { ServersComponent } from './presentation/servers/servers.component';
import { StatusItemComponent } from './presentation/status/StatusItem.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './presentation/navbar/Navbar.component';
import { ServerEditComponent } from './presentation/server/server-edit/Server-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { GETS_SERVERS } from './domain/getsServers';
import { HttpServersService } from './infrastructure/http-servers.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerItemComponent,
    ServersComponent,
    StatusItemComponent,
    NavbarComponent,
    ServerEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  ],
  providers: [{ provide: GETS_SERVERS, useClass: HttpServersService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
