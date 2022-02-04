import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-item',
  template: `
    <span *ngIf="isOnline; else isOffline">
      <span class="text-uppercase text-success font-weight-bold">online</span>
    </span>
    <ng-template #isOffline>
      <span class="text-uppercase text-danger font-weight-bold">offline</span>
    </ng-template>
  `,
})
export class StatusItemComponent {
  @Input() isOnline: boolean;

  constructor() {}
}
