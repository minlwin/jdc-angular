import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  templateUrl: './form-builder.component.html',
  styles: [
  ]
})
export class FormBuilderComponent {

  form: FormGroup

  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      prices: builder.group({
        normal: [0, Validators.min(200)],
        agent: [0, Validators.min(200)]
      }, { validators: this.validatePrice }),
      properties: builder.array([], this.validateProperties)
    })
  }

  get properties(): FormArray {
    return this.form.get('properties') as FormArray
  }

  addProperty() {
    this.properties.push(this.builder.group({
      name: '',
      value: ''
    }))
  }

  validatePrice(control: AbstractControl): ValidationErrors | null {

    const prices = control.value
    if (prices.normal < prices.agent) {
      return {
        prices: 'Agent price must be less than normal price.'
      }
    }
    return null
  }

  validateProperties(control: AbstractControl): ValidationErrors | null {
    const values: any[] = control.value

    for (const value of values) {
      if (!value.name || !value.value) {
        return {
          'properties': 'Please enter Properties fields.'
        }
      }
    }
    return null
  }

}
