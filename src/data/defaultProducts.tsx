import { ItemData } from "../components/Body";
import { v4 } from "uuid";

const defaultProducts: ItemData[] = [{
    quantity: 20,
    price: 10.00,
    image: "https://i.discogs.com/28792eJdBsWi65IcafyNZvQXZ5bk7wPyWxWomqIOqbY/rs:fit/g:sm/q:90/h:416/w:417/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODY5/LTEyMzEzMjEwMjUu/anBlZw.jpeg",
    title: "D.R. Base vs Karim - Barracuda / Funky 303",
    description: "Tinrib Recordins RIB001",
    id: v4()
},
{
    quantity: 10,
    price: 10.00,
    image: "https://i.discogs.com/wDIn6eFelh-yLGehUdRdvtYTrHSMK-hH2IeLnIYIFlc/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg2/NS0xNDY1MDY4Nzgw/LTUzNTEuanBlZw.jpeg",
    title: "Fish Tales Vol. 4 - Alien Lobster Abduction",
    description: "Tinrib Recordings RIBCD2008",
    id: v4()
},]

export default defaultProducts;