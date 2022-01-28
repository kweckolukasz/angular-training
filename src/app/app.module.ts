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

@NgModule({
  declarations: [
    AppComponent,
    ServerItemComponent,
    ServersComponent,
    StatusItemComponent,
    NavbarComponent,
    ServerEditComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
