import { Component, Inject, OnInit } from '@angular/core';
import { GetsServers, GETS_SERVERS } from 'src/app/domain/getsServers';
import { StatusItemComponent } from 'src/app/presentation/status/StatusItem.component';
import { ServerItemComponent } from '../server/server-item/ServerItem.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers$ = this.getsServers.getAll();
  constructor(@Inject(GETS_SERVERS) private getsServers: GetsServers) {}
  ngOnInit(): void {}
}
