import { Component } from '@angular/core';

@Component({
  selector: 'error-alert',
  template: `
    <div class="alert alert-danger">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        &times;
      </button>
      <strong>Alert, wolfes!</strong> They are coming!!!
    </div>
  `,
})
export class errorAlert {}
