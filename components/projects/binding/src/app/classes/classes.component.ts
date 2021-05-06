import { Component } from '@angular/core';

const OBJECT_TYPE = { bordered: true, shadow: true }
const ARRAY_TYPE = ['bordered', 'shadow']

@Component({
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {

  showBorder = true

  multi = ARRAY_TYPE

}
