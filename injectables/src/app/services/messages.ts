import { Injectable } from "@angular/core";
import { Counter } from "./counter";

@Injectable({ providedIn: 'any' })
export class MessageService {

    private list: any[] = []

    constructor(private ids: Counter) {
    }

    add(data: string) {
        this.list.push({ id: this.ids.next(), message: data })
    }

    get messages() {
        return [...this.list]
    }
}