import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[hightLight]'
})
export class HightLightDirective implements OnChanges {

    @Input()
    hightLight: string = ''

    @Input()
    textColor: string = ''

    constructor(private eleRef: ElementRef, private render: Renderer2) {
        console.log(`Hight Light is : ${this.hightLight}`)
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.render.setStyle(this.eleRef.nativeElement, 'padding', '20px')
        this.render.setStyle(this.eleRef.nativeElement, 'background-color', this.hightLight || 'silver')
        this.render.setStyle(this.eleRef.nativeElement, 'color', this.textColor || 'white')
    }

    @HostListener('mouseenter')
    mouseIn() {
        this.render.setStyle(this.eleRef.nativeElement, 'font-size', '40px')
    }

    @HostListener('mouseleave')
    mouseOut() {
        this.render.removeStyle(this.eleRef.nativeElement, 'font-size')
    }
}