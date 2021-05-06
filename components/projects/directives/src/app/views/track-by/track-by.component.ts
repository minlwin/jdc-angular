import { Component } from '@angular/core';

@Component({
  templateUrl: './track-by.component.html',
  styles: [
  ]
})
export class TrackByComponent {

  list = [
    { id: 1, name: 'Data 1' },
    { id: 2, name: 'Data 2' },
    { id: 3, name: 'Data 3' },
    { id: 4, name: 'Data 4' },
  ]

  sameObjects() {
    this.list = this.list.map(a => a)
  }

  otherObjects() {
    this.list = this.list.map(a => ({ ...a, name: `${a.name} Update` }))
  }

  checkData(i: number, data: any) {
    return data.id
  }

}
