import { Component } from '@angular/core';
import { MessageService } from '../services/messages';

@Component({
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent {

  list: any[] = []

  constructor(private service: MessageService) {
  }

  add(input: any) {
    this.service.add(input.value)
    input.value = ''
    this.list = this.service.messages
  }

}
