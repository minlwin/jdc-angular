import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styles: [
  ]
})
export class FormInputComponent {

  @Input() name: any

}
