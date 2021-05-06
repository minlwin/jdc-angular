import { Component } from '@angular/core';

@Component({
  templateUrl: './styles.component.html',
  styles: [
  ]
})
export class StylesComponent {

  value = 100

  changeRange(value: string) {
    this.value = Number(value)
  }

  targetStyle = {
    height: '100px',
    'background-color': 'red'
  }

}
