import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './to-page.component.html',
  styles: [
  ]
})
export class ToPageComponent {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/hello'])
  }
}
