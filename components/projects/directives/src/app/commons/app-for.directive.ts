import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appFor]'
})
export class AppForDirective implements OnChanges {

    @Input()
    appForIn: any

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.appForIn) {
            Object.entries(this.appForIn).forEach((e, index) => {
                this.container.createEmbeddedView(this.template, {
                    $implicit: e[0],
                    v: e[1],
                    i: index
                })
            })
        }
    }

}