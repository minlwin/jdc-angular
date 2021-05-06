import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styles: [
  ]
})
export class AppCardComponent {

  @Input()
  title = ''

  @Input()
  marginTop = false
}
