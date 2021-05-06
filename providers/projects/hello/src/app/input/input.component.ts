import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageRepository } from '../resources/message.resources';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent {


  constructor(
    private router: Router,
    private repo: MessageRepository) { }

  addMessage(message: any) {
    this.repo.add(message.value)
    message.value = ''
    this.router.navigate(['/list'])
  }

}
