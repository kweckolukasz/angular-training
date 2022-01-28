import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `<h2 [ngStyle]="{ color: getServerStatus() }">
    {{ serverName }}
  </h2>`,
})
export class ServerComponent {
  serverName: string;
  constructor() {}
  getServerStatus() {
    return Math.random() < 0.5 ? 'red' : 'green';
  }
}
