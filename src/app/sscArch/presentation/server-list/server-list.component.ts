import { Component, Inject, OnInit } from '@angular/core';
import { GetsServers, GETS_SERVERS } from './../../domain/getsServers';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent implements OnInit {
  servers$ = this.getsServers.getAll();

  constructor(@Inject(GETS_SERVERS) private getsServers: GetsServers) {}

  ngOnInit(): void {}
}
