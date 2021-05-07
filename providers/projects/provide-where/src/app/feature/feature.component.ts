import { Component } from '@angular/core';
import { Message } from 'projects/hello/src/app/resources/message.resources';
import { FeatureService } from '../services/my-searvice';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styles: [
  ]
})
export class FeatureComponent {

  constructor(private service: FeatureService) { }

  addMessage(m: string) {
    this.service.add(m)
  }

  get messages(): Message[] {
    return this.service.getAll()
  }
}
