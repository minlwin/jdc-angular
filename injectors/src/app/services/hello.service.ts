import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'platform' })
export class HelloService {

    private list: string[] = []

    add(message: string): string[] {
        this.list.push(message)
        return [...this.list]
    }

    getMessages(): string[] {
        return [...this.list]
    }
}