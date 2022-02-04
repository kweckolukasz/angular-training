import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server-dialog',
  templateUrl: './add-server-dialog.component.html',
  styleUrls: ['./add-server-dialog.component.css'],
})
export class AddServerDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  userName: string = '';
  serverName: string = '';

  serverCreated: boolean = undefined;
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
