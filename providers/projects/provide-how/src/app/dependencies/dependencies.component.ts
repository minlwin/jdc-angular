import { Component } from '@angular/core';
import { OtherClass, SomeClass, ValueDependentClass } from './dependencies';

@Component({
  templateUrl: './dependencies.component.html',
  providers: [
    SomeClass,
    { provide: 'name', useValue: "Dependency Injection" },
    { provide: 'count', useValue: 3 },
    { provide: ValueDependentClass, deps: ['name', 'count'] },
    { provide: OtherClass, deps: [SomeClass] }
  ]
})
export class DependenciesComponent {

  otherMessage: any

  valueMessage: any

  constructor(other: OtherClass, value: ValueDependentClass) {
    this.otherMessage = other.getMessage()
    this.valueMessage = value.getMessage()
  }
}
