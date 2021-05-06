import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  user = { name: 'Aung Aung', role: 'Admin' }

  message = "Hello Angular Pipes"

  today = new Date

  data1 = 191717
  data2 = 3.202917

}
