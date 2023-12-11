export interface actionInterface {
    type: string,
    quantity?: ItemData["quantity"],
    price?: ItemData["price"],
    title?: ItemData["title"],
    image?: ItemData["image"],
    description?: ItemData["description"],
    id: ItemData["id"],
}
export interface ItemData {
    quantity: number,
    price: number,
    image: string,
    title: string,
    description: string,
    id: string,
}
export interface itemState {
    [id: string]: ItemData
}
export interface cartAdjustObj {
    id: string,
    quantity: number,
}
