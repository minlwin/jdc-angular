import { Component } from '@angular/core';
import { User } from './user';

@Component({
  templateUrl: './properties.component.html',
  styles: [
  ]
})
export class PropertiesComponent {

  status = false

  viewCode = 1

  aung: User = {
    name: 'Aung Aung',
    phone: '09878998777',
    email: 'aung@gmail.com'
  }
}
