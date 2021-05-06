import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolations',
  templateUrl: './interpolations.component.html',
  styles: [
  ]
})
export class InterpolationsComponent {

  // Which Parts
  // Properties (Bindings, Variable)
  // String Type
  // Data Types
  title: string = "Text Interpolations"

  // Custom Object
  person = {
    firstName: "Zaw",
    lastName: "Min Lwin"
  }

  // Date Type
  date = new Date

  // Number
  data = Number.MAX_VALUE

  // Getter
  get personName(): string {
    return `${this.person.firstName} ${this.person.lastName}`
  }


  // Method with Return Type
  sayHello(name: string) {
    return `Hello ${name}`
  }

}
