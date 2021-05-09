import { InjectionToken } from "@angular/core";
import { Category, Product } from "./data.model";
import { IdGenerator, Model } from "./id-gen";
import { Storage } from "./storage";

export type Entity = Category | Product

export interface Repository<T extends Entity> {
    getAll(): T[]
    addNew(data: T): void
}

const STORAGE = "com.jdc.storage"

class MoakRepository<T extends Entity> implements Repository<T>, Storage {

    constructor(private type: Model, private idGen: IdGenerator) { }

    private list: T[] = []

    getAll(): T[] {
        return [...this.list]
    }

    addNew(data: T): void {
        this.list.push({ ...data, id: this.idGen.next(this.type) })
    }

    loadData(): void {
        const data = localStorage.getItem(`${STORAGE}.${this.type}`)
        if (data) {
            this.list = JSON.parse(data)
        }
    }

    saveData(): void {
        localStorage.setItem(`${STORAGE}.${this.type}`, JSON.stringify(this.list))
    }
}

export const REPO_FACTORY = (type: Model, idGen: IdGenerator) => new MoakRepository(type, idGen)

export const CATEGORY_TYPE = new InjectionToken('Category')
export const PRODUCT_TYPE = new InjectionToken('Product')

export const CATEGORY_REPO = new InjectionToken('Category Repo')
export const PRODUCT_REPO = new InjectionToken('Product Repo')
