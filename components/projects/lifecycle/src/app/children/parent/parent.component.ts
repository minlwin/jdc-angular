import { Component, ContentChild, ViewChild } from '@angular/core';
import { BaseLoggerComponent } from '../../all-hooks';
import { ContentChildComponent } from '../content-child/content-child.component';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent extends BaseLoggerComponent {

  @ContentChild(ContentChildComponent)
  content?: ContentChildComponent

  @ViewChild(ViewChildComponent)
  view?: ViewChildComponent

  constructor() {
    super(false, 'Parent Component')
  }

}
