import { Component, Inject, InjectionToken } from '@angular/core';
import { Message } from 'projects/hello/src/app/resources/message.resources';
import { AbstractRepo, ComponentService } from '../services/my-searvice';

export const TOKEN = new InjectionToken("componentService")

@Component({
  templateUrl: './app-page.component.html',
  providers: [
    ComponentService,
    { provide: TOKEN, useClass: ComponentService }
  ]
})
export class AppPageComponent {

  constructor(@Inject(TOKEN) private service: AbstractRepo) { }

  addMessage(message: string) {
    this.service.add(message)
  }

  get list(): Message[] {
    return this.service.getAll()
  }

}
