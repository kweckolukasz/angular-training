import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-item',
  template: ` 
      <span [class]="getClass(statusName)">{{ statusName }}</span>
  `,
})
export class StatusItemComponent {
  @Input() statusName: string;
  className = 'label';

  constructor() {}

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
