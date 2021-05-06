import { Component, Input } from "@angular/core";
import { BaseLoggerComponent } from "../../all-hooks";

@Component({
    selector: 'array-value',
    template: '<ul><li *ngFor="let item of list">{{item}}</li></ul>'
})
export class ArrayValueChild extends BaseLoggerComponent {

    @Input()
    list: string[] = []

    constructor() {
        super(true, 'ArrayValueChild')
        this.log('constructor')
    }
}