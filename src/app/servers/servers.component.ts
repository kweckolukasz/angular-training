import { Component, OnInit } from '@angular/core';
import { StatusItemComponent as StatusItemComponent } from 'src/app/servers/status/StatusItem.component';
import { ServerModel } from './server/Server.model';
import { StatusServer } from './statusServer/StatusServer';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

  serversAndStatuses: StatusServer[] = [
    new StatusServer('onet', 'online'),
    new StatusServer('sasanka', 'uknown'),
    new StatusServer('allegro', 'offline'),
  ];
  servers: ServerModel[] = [
    new ServerModel('onet', 'https://www.onet.pl', 1),
    new ServerModel('sasanka', 'https://sasanka.info', 2),
    new ServerModel('allegro', 'https://allegro.pl', 10),
  ];
  statuses: StatusItemComponent[] = [
    new StatusItemComponent('online'),
    new StatusItemComponent('offline'),
    new StatusItemComponent('uknown'),
  ];

  constructor() {}
  ngOnInit(): void {}
}
