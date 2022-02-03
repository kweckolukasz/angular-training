import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-item',
  template: `
    <a name="" id="" class="btn btn-default" href="#" role="button">{{
      serverName
    }}</a>
  `,
})
export class ServerItemComponent {
  @Input() serverName: string;
  constructor() {}
}
