import { Component, Inject } from '@angular/core';

@Component({
  templateUrl: './alias.component.html',
  providers: [
    { provide: 'alias', useExisting: 'message' }
  ]
})
export class AliasComponent {

  constructor(@Inject('alias') public message: any) {
  }

}
