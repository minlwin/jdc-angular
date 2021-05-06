import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent implements OnInit {

  two = 2
  three = 3

  constructor() { }

  ngOnInit(): void {
  }

}
