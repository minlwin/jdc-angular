export interface Message {
    message: string
    date: Date
}

export class MessageRepository {
    private list: Message[] = []

    add(message: string) {
        this.list.push({
            message: message,
            date: new Date
        })
    }

    getAll(): Message[] {
        return [...this.list]
    }
}