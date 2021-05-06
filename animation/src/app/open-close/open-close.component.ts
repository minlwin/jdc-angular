import { Component } from '@angular/core';
import { OPEN_CLOSE } from './open-close.animation';

@Component({
  templateUrl: './open-close.component.html',
  styles: [
    '#target {height: 400px; background-color: skyblue; margin-top: 40px}'
  ],
  animations: [
    OPEN_CLOSE
  ]
})
export class OpenCloseComponent {

  isOpen = true
}
