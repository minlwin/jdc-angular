import { Component } from '@angular/core';
import { Message } from 'projects/hello/src/app/resources/message.resources';
import { FeatureService } from '../../services/my-searvice';

@Component({
  templateUrl: './feature-page.component.html',
  styles: [
  ]
})
export class FeaturePageComponent {

  constructor(private service: FeatureService) { }

  get data(): Message[] {
    return this.service.getAll()
  }

}
