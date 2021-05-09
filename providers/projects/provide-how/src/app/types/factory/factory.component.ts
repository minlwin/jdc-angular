import { Component, Inject } from '@angular/core';
import * as Demo from './demo';

@Component({
  templateUrl: './factory.component.html',
  providers: [
  ]
})
export class FactoryComponent {

  constructor(@Inject('message') public message: Demo.Message) {
  }

}
