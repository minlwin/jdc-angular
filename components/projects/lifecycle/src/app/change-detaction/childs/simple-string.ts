import { Component, Input } from "@angular/core";
import { BaseLoggerComponent } from "../../all-hooks";

@Component({
    selector: 'simple-string',
    template: `<h3>{{message}}</h3>`
})
export class SimpleStringChild extends BaseLoggerComponent {


    @Input() message: any

    constructor() {
        super(true, 'SimpleStringChild')
        this.log('constructor')
    }
}