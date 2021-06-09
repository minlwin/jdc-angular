import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent {

  message = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ])

  messageValue = ''

  send() {
    this.messageValue = this.message.value
  }

}
