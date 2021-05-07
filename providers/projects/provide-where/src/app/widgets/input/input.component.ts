import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent {

  @Output()
  onAddListener = new EventEmitter

  @Input()
  title = ''

  add(input: any) {
    this.onAddListener.emit(input.value)
    input.value = ''
  }

}
