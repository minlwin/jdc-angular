import { Component } from '@angular/core';
import { RootService } from '../services/my-searvice';

@Component({
  templateUrl: './both-page.component.html',
  providers: [
    RootService
  ]
})
export class BothPageComponent {

  list: any

  constructor(service: RootService) {
    this.list = service.getAll()
  }
}
