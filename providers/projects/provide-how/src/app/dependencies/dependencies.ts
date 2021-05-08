
export class SomeClass {
    message = 'Hello Angular'
}

export class OtherClass {

    constructor(private some: SomeClass) {

    }

    getMessage() {
        return {
            type: 'Other',
            dependent: 'Some',
            message: this.some.message
        }
    }
}

export class ValueDependentClass {

    constructor(private name: string, private count: number) { }

    getMessage(): any[] {
        const array: any[] = []

        for (let i = 0; i < this.count; i++) {
            array.push({
                id: i + 1,
                name: `${this.name} ${i + 1}`
            })
        }

        return array
    }
}