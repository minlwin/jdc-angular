import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  title = "Counter Demo"
  count = 0

  countDown() {
    this.count--
  }

  countUp() {
    this.count++
  }
}
