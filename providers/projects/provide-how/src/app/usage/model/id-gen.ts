import { InjectionToken } from "@angular/core";
import { Storage } from "./storage";

export type Model = 'Category' | 'Product'

export interface IdGenerator {
    next(type: Model): number
}

const STORAGE = 'com.jdc.idgen.storage'

class IdGeneratorMoak implements IdGenerator, Storage {

    private ids: { [key: string]: number } = {
        Category: 0,
        Product: 0
    }

    next(type: Model): number {
        return ++this.ids[type]
    }

    loadData(): void {
        const data = localStorage.getItem(STORAGE)
        if (data) {
            this.ids = JSON.parse(data)
        }
    }

    saveData(): void {
        localStorage.setItem(STORAGE, JSON.stringify(this.ids))
    }
}

export const ID_GENERATOR = () => new IdGeneratorMoak

export const ID_GEN = new InjectionToken('IdGenerator')