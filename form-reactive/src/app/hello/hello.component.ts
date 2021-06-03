import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent {

  message = new FormControl

  messageValue = ''

  send() {
    this.messageValue = this.message.value
  }

}
