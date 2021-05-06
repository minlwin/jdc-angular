import { Component } from "@angular/core";
import { BaseLoggerComponent } from "../all-hooks";

@Component({
    templateUrl: 'change-detaction.html'
})
export class ChangeDetaction extends BaseLoggerComponent {

    simpleString: any

    objectValue = { data: '' }

    arrayValue: string[] = []

    constructor() {
        super(false, 'AppComponent')
        this.log('constructor')
    }

    setMessage(input: any) {
        this.simpleString = input.value
        this.objectValue = { data: input.value }
        this.arrayValue = [...this.arrayValue, input.value]
        input.value = ''
    }
}