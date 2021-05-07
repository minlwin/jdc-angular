import { Component } from '@angular/core';
import { Message } from 'projects/hello/src/app/resources/message.resources';
import { ComponentService } from '../services/my-searvice';

@Component({
  templateUrl: './app-page.component.html',
  providers: [
    ComponentService
  ]
})
export class AppPageComponent {

  constructor(private service: ComponentService) { }

  addMessage(message: string) {
    this.service.add(message)
  }

  get list(): Message[] {
    return this.service.getAll()
  }

}
