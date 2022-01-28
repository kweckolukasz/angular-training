import { Component } from '@angular/core';

@Component({
  selector: 'app-server-item',
  template: `<td scope="row">
    <a name="" id="" class="btn btn-default" href="#" role="button">{{
      statusServer.serverName
    }}</a>
  </td>`,
})
export class ServerItemComponent {
  constructor() {}
}
