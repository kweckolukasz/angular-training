import { Component } from '@angular/core';

@Component({
  selector: 'new-alert',
  template: `
    <div class="alert alert-info alert-small">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        &times;
      </button>
      <strong>New server</strong> created seconds ago
    </div>
  `,
})
export class newAlert {}
