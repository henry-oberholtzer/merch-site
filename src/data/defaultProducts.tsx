import { ItemData } from "../components/Body";
import { v4 } from "uuid";

const defaultProducts: ItemData[] = [{
    quantity: 20,
    price: 15.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg",
    title: "A good CD",
    description: "It's a good product",
    id: v4()
}]

export default defaultProducts;