import { animate, style, transition, trigger } from "@angular/animations";

export const enterLeave = trigger('enterLeave', [
    transition(':leave', animate(500, style({ opacity: 0 }))),
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(500, style({ transform: 'translateX(0)', opacity: 1 }))
    ])
])