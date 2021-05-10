import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styles: [
  ]
})
export class MessageInputComponent {

  @Output()
  onAdd = new EventEmitter

  add(input: any) {
    this.onAdd.emit(input.value)
    input.value = ''
  }

}
