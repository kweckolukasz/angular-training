import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `
    <div class="alert alert-warning">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        &times;
      </button>
      <strong>Warning, Wolfes! </strong> they are coming!!
    </div>
  `,
})
export class warningAlert {}
