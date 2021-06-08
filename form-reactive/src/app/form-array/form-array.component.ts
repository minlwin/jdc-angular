import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './form-array.component.html',
  styles: [
  ]
})
export class FormArrayComponent {

  form: FormGroup

  constructor() {

    this.form = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      tags: new FormArray([])
    })
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray
  }

  addTag() {
    this.tags.push(new FormControl)
  }

}
