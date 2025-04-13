export interface Book {
    _id?: string
    title: string
    author: string
    price: number
    imgPath: string
    inStock: boolean
    quantity: number
    discount?: number
}