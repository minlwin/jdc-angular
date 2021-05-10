import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styles: [
  ]
})
export class MessageListComponent {

  @Input()
  messages: string[] = []

}
