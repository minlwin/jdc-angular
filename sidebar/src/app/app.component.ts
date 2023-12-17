import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './utils/parts/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'sidebar';
}
