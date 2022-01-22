import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isInputEmpty: boolean = false;

  inputNotEmpty() {
    return this.isInputEmpty;
  }
  onInputTyped($event) {
    this.isInputEmpty = $event.srcElement.value === '' ? true : false;
  }
}
