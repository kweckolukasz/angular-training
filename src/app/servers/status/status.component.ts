import { Component, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <span [ngClass]="getClass()">Server Status: {{ serverStatus }}</span>
  `,
})
export class StatusComponent {
  serverStatus: string;
  className = 'label';

  constructor(@Inject(String) serverStatus: string) {
    this.serverStatus = serverStatus;
  }

  getClass() {
    switch (this.serverStatus) {
      case 'offline':
        this.className.concat(' label-danger');
        break;
      case 'online':
        this.className.concat(' label-success');
        break;

      default:
        this.className.concat(' label-warning');
        break;
    }
  }
}
