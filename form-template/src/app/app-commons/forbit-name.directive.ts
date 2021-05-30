import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[forbit-names]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ForbitNameDirective, multi: true }
  ]
})
export class ForbitNameDirective implements Validator {

  @Input("forbit-names")
  forbitNames: string[] = []

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    for (const badGuy of this.forbitNames) {
      if (badGuy == control.value) {
        return {
          'forbitten': `${badGuy} can't regist this site.`
        }
      }
    }

    return null
  }


}
