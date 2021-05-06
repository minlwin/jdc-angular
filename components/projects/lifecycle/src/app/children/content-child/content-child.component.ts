import { Component } from '@angular/core';
import { BaseLoggerComponent } from '../../all-hooks';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styles: [
  ]
})
export class ContentChildComponent extends BaseLoggerComponent {

  constructor() {
    super(true, 'Content Child')
  }


}
