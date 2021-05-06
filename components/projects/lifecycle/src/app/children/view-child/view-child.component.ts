import { Component } from '@angular/core';
import { BaseLoggerComponent } from '../../all-hooks';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styles: [
  ]
})
export class ViewChildComponent extends BaseLoggerComponent {

  constructor() {
    super(true, 'View Child')
  }


}
