import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: string = '';
  serverName: string = '';

  serverCreated: boolean = undefined;

  inputIsEmpty() {
    return !(this.userName !== '' && this.serverName !== '');
  }

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
}
