import { Component, Inject } from '@angular/core';
import { Message } from 'projects/hello/src/app/resources/message.resources';
import { ComponentService } from '../../services/my-searvice';
import { TOKEN } from '../app-page.component';

@Component({
  selector: 'app-page-child',
  templateUrl: './page-child.component.html',
  styles: [
  ]
})
export class PageChildComponent {


  constructor(@Inject(TOKEN) private service: ComponentService) { }

  get messageList(): Message[] {
    return this.service.getAll()
  }
}
