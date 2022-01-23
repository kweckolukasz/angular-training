import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'src/app/servers/alert/alert.component';
import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers: ServerComponent[] = [
    new ServerComponent('test server 1'),
    new ServerComponent('test server 2'),
    new ServerComponent('test server 3'),
  ];
  alerts: AlertComponent[] = [
    new AlertComponent('online'),
    new AlertComponent('offline'),
    new AlertComponent('uknown'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
