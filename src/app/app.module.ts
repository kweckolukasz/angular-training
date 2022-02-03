import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerItemComponent } from './servers/server/ServerItem.component';
import { ServersComponent } from './servers/servers.component';
import { StatusItemComponent } from './servers/status/StatusItem.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/Navbar.component';
import { ServerEditComponent } from './servers/server-edit/Server-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GETS_SERVERS } from './sscArch/domain/getsServers';
import { HttpServersService } from './sscArch/infrastructure/http-servers.service';
import { ServerListComponent } from './sscArch/presentation/server-list/server-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerItemComponent,
    ServersComponent,
    StatusItemComponent,
    NavbarComponent,
    ServerEditComponent,
    ServerListComponent,
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
    HttpClientModule,
  ],
  providers: [{ provide: GETS_SERVERS, useClass: HttpServersService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
