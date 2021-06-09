import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    static forbitName(control: AbstractControl): ValidationErrors | null {

        if (control.value == 'Min Lwin') {
            return {
                forbitName: {
                    error: true,
                    message: `${control.value} can't regist this site.`
                }
            }
        }
        return null
    }

    static forbitNames(...names: string[]): ValidatorFn {
        return controls => {

            for (const name of names) {
                if (name == controls.value) {
                    return {
                        forbitName: {
                            error: true,
                            message: `${controls.value} can't regist this site.`
                        }
                    }
                }
            }
            return null
        }
    }
}