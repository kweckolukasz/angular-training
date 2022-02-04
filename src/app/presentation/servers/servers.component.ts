import { Component, Inject, OnInit } from '@angular/core';
import { GetsServers, GETS_SERVERS } from 'src/app/domain/getsServers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers$ = this.getsServers.getAll();
  displayedColumns: string[] = ['server', 'status'];

  constructor(@Inject(GETS_SERVERS) private getsServers: GetsServers) {}
  ngOnInit(): void {}
}
