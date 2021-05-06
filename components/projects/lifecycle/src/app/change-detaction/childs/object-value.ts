import { Component, Input } from "@angular/core";
import { BaseLoggerComponent } from "../../all-hooks";

@Component({
    selector: 'object-value',
    template: '<h3>{{message.data}}</h3>'
})
export class ObjectValueChild extends BaseLoggerComponent {

    @Input()
    message: any

    constructor() {
        super(true, 'ObjectValueChild')
        this.log('constructor')
    }
}