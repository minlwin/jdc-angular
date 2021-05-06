import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent implements OnInit {

  backgroundColor = 'yellow'

  constructor() { }

  ngOnInit(): void {
  }

}
