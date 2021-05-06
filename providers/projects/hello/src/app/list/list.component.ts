import { Component } from '@angular/core';
import { Message, MessageRepository } from '../resources/message.resources';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  list: Message[]

  constructor(repo: MessageRepository) {
    this.list = repo.getAll()
  }


}
