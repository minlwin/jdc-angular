import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'any' })
export class Counter {
    private count = 0

    next = () => ++this.count
}