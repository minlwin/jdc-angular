import { Component } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent {

  messages: string[] = []

  constructor(private service: HelloService) {
    this.messages = service.getMessages()
  }

  add(message: string) {
    this.messages = this.service.add(message)
  }
}
