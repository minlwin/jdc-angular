export interface Message {
    type: string
    message: string
}

export function messageFactory(): Message {
    return {
        type: 'Factory Provider',
        message: 'Hello Angular DI'
    }
}