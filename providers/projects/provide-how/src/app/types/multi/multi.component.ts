import { Component, Inject, InjectionToken } from '@angular/core';

const MESSAGES = new InjectionToken('messages')

@Component({
  templateUrl: './multi.component.html',
  providers: [
    { provide: MESSAGES, useExisting: 'message', multi: true },
    { provide: MESSAGES, useFactory: () => ({ type: 'Multi Provider', message: 'Hello Multi Provider' }), multi: true },
  ]
})
export class MultiComponent {

  constructor(@Inject(MESSAGES) public messages: any[]) { }

}
