import { Component, OnInit } from '@angular/core';
import { StatusComponent as StatusComponent } from 'src/app/servers/status/status.component';
import { ServerModel } from './server/server.model';
import { StatusServer } from './statusServer/StatusServer';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  className = 'badge rounded-pill bg-';

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
  statuses: StatusComponent[] = [
    new StatusComponent('online'),
    new StatusComponent('offline'),
    new StatusComponent('uknown'),
  ];

  constructor() {}

  getServerStatus() {
    return Math.random() < 0.5 ? 'red' : 'green';
  }

  getClass(serverStatus) {
    switch (serverStatus) {
      case 'offline':
        return 'badge rounded-pill bg-danger';

      case 'online':
        return 'badge rounded-pill bg-success';

      default:
        return 'badge rounded-pill bg-warning';
    }
  }

  ngOnInit(): void {}
}
