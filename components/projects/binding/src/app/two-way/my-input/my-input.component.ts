import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styles: [
  ]
})
export class MyInputComponent {

  @Input()
  value: any = ""

  @Output()
  valueChange = new EventEmitter
}
