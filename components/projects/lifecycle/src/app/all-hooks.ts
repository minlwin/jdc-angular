import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

export interface AllHooks extends OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

}

@Directive()
export class BaseLoggerComponent implements AllHooks {

    constructor(protected loggable: boolean, protected title: string) { }

    ngAfterContentChecked(): void {
        this.log('ngAfterContentChecked')
    }

    ngAfterViewInit(): void {
        this.log('ngAfterViewInit')
    }

    ngAfterViewChecked(): void {
        this.log('ngAfterViewChecked')
    }

    ngOnDestroy(): void {
        this.log('ngOnDestroy')
    }

    ngAfterContentInit(): void {
        this.log('ngAfterContentInit')
    }

    ngDoCheck(): void {
        this.log('ngDoCheck')
    }

    ngOnInit(): void {
        this.log('ngOnInit')
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.log('ngOnChanges')
    }

    protected log(name: string) {
        if (this.loggable) {
            console.log(`========== ${this.title.padEnd(16, ' ')} : ${name.padEnd(16, ' ')} =============`)
        }
    }
}