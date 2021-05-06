import { animate, state, style, transition, trigger } from "@angular/animations";

export const OPEN_CLOSE = trigger('openClose', [
    state('false', style({
        height: '0px',
        opacity: 0
    })),
    transition('* => *', animate('300ms')),
])