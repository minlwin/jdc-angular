import { Component } from '@angular/core';
import { Message } from 'projects/hello/src/app/resources/message.resources';
import { ComponentService } from '../../services/my-searvice';

@Component({
  selector: 'app-page-child',
  templateUrl: './page-child.component.html',
  styles: [
  ]
})
export class PageChildComponent {


  constructor(private service: ComponentService) { }

  get messageList(): Message[] {
    return this.service.getAll()
  }
}
