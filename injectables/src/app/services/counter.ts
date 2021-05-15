import { Injectable } from "@angular/core"

@Injectable()
export class Counter {
    private count = 0

    next = () => ++this.count
}