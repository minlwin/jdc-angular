import { Component } from '@angular/core';
import { RootService } from '../../services/my-searvice';

@Component({
  templateUrl: './root-page.component.html',
  styles: [
  ]
})
export class RootPageComponent {

  constructor(private service: RootService) {
  }

  addMessage(s: string) {
    this.service.add(s)
  }

  get list() {
    return this.service.getAll()
  }
}
