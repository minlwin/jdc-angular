import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  templateUrl: './incre-decre.component.html',
  animations: [
    trigger('increDecre', [

      transition(':increment', [
        query(':enter', [
          style({ width: '20%', opacity: 0 }),
          animate('300ms ease-out', style({ width: '*', opacity: '*' }))
        ], { optional: true })
      ]),

      transition(':decrement', [
        query(':leave', [
          animate('300ms ease-in-out', style({ width: '20%', opacity: 0 }))
        ], { optional: true })
      ])
    ])
  ]
})
export class IncreDecreComponent {

  list: string[] = []

  add(element: any) {
    if (element.value) {
      this.list.push(element.value)
      element.value = ''
    }
  }

  remove(index: number) {
    this.list = this.list.filter((_, i) => i != index)
  }
}
