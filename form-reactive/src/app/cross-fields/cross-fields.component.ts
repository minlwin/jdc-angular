import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  templateUrl: './cross-fields.component.html',
  styles: [
  ]
})
export class CrossFieldsComponent {

  form: FormGroup
  categories = ['Foods', 'Drinks', 'Accessory', 'Kitchen']

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      prices: new FormGroup({
        agent: new FormControl(0, Validators.min(50)),
        normal: new FormControl(0, Validators.min(50))
      }, this.checkPrices),
      properties: new FormArray([], this.checkProperties)
    })
  }

  addProperty() {
    this.properties.push(new FormGroup({
      name: new FormControl,
      value: new FormControl
    }))
  }

  get properties(): FormArray {
    return this.form.get('properties') as FormArray
  }

  checkProperties(control: AbstractControl): ValidationErrors | null {
    const array: any[] = control.value

    for (const value of array) {
      if (!value.name || !value.value) {
        return {
          'property': 'Please enter Property name and value.'
        }
      }
    }
    return null
  }

  checkPrices(control: AbstractControl): ValidationErrors | null {

    const value = control.value

    if ((value.agent > 0 || value.normal > 0) && (value.agent > value.normal)) {
      return {
        'prices': 'Agent price should be less than normal price'
      }
    }

    return null
  }

}
