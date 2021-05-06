import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[hello]'
})
export class HelloDirective {

    constructor(eleRef: ElementRef, render: Renderer2) {
        render.addClass(eleRef.nativeElement, 'jumbotron')
    }
}