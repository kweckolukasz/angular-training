import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-edit',
  templateUrl: './Server-edit.component.html',
})
export class ServerEditComponent implements OnInit {
  userName: string = '';
  serverName: string = '';

  serverCreated: boolean = undefined;
  constructor() {}

  ngOnInit(): void {}

  onSubmitFormButtonClick() {
    setTimeout(() => {
      this.serverName = '';
      this.userName = '';
    }, 2000);
    this.serverCreated = this.serverName === 'a' ? false : true;
    setTimeout(() => {
      this.serverCreated = undefined;
    }, 2000);
  }
  inputIsEmpty() {
    return !(this.userName !== '' && this.serverName !== '');
  }
}
