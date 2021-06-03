import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './form-group.component.html',
  styles: [
  ]
})
export class FormGroupComponent {

  form: FormGroup
  courses = ["Java Basic", "Angular", "Spring Framework", "Flutter", "One Stop"]

  constructor() {
    this.form = new FormGroup({
      name: new FormControl,
      course: new FormControl(""),
      date: new FormControl,
      contact: new FormGroup({
        phone: new FormControl,
        email: new FormControl
      }),
      address: new FormControl
    })
  }


}
