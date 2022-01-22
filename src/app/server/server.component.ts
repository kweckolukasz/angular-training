import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `<h2>server component</h2>`,
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class ServerComponent {}
