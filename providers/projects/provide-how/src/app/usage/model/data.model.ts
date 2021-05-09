export interface Category {
    id: number
    name: string
}

export interface Product {
    id: number
    category: Category
    name: string
}