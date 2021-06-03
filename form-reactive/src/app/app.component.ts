import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  message = new FormControl

  messageValue = ''

  send() {
    this.messageValue = this.message.value
  }
}
