import { Component, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-status-item',
  template: `
    <td scope="row">
      <span [class]="getClass(statusServer.statusName)">{{
        statusServer.statusName
      }}</span>
    </td>
  `,
})
export class StatusItemComponent {
  serverStatus: string;
  className = 'label';

  constructor(@Inject(String) serverStatus: string) {
    this.serverStatus = serverStatus;
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
}
