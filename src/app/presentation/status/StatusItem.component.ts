import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-item',
  template: `
    <span *ngIf="isOnline; else isOffline">
      <span class="label badge rounded-pill bg-success">online</span>
    </span>
    <ng-template #isOffline>
      <span class="label badge rounded-pill bg-danger">offline</span>
    </ng-template>
  `,
})
export class StatusItemComponent {
  @Input() isOnline: boolean;

  constructor() {}
}
