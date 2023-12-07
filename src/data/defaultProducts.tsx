import { ItemData } from "../components/Body";
import { v4 } from "uuid";

const defaultProducts: ItemData[] = [{
    quantity: 20,
    price: 11.99,
    image: "https://i.discogs.com/28792eJdBsWi65IcafyNZvQXZ5bk7wPyWxWomqIOqbY/rs:fit/g:sm/q:90/h:416/w:417/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODY5/LTEyMzEzMjEwMjUu/anBlZw.jpeg",
    title: 'D.R. Base vs Karim - Barracuda / Funky 303 [12"]',
    description: "Tinrib Recordins RIB001",
    id: v4()
},
{
    quantity: 10,
    price: 10.00,
    image: "https://i.discogs.com/wDIn6eFelh-yLGehUdRdvtYTrHSMK-hH2IeLnIYIFlc/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg2/NS0xNDY1MDY4Nzgw/LTUzNTEuanBlZw.jpeg",
    title: "Fish Tales Vol. 4 - Alien Lobster Abduction [CD]",
    description: "Tinrib Recordings RIBCD2008",
    id: v4()
},
{
    quantity: 10,
    price: 15.99,
    image: "https://i.discogs.com/UlYnDbp0mJPaSlUapglwfnKWPfGAAO74-OknLxYKRHc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg2/MS0xNTk5MzUxNzE1/LTQ3MjQuanBlZw.jpeg",
    title: "Weirdo - Imintouchwithyourworld [CD]",
    description: "Tinrib Recordings RIBCD2007",
    id:v4()
},
{
    quantity: 30,
    price: 15.99,
    image: "https://i.discogs.com/ynAh2oO-pV3-d4nH1gwSnSmkXKLSVbm8RIraflDXrEk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyMzMz/LTE0OTMxOTIzODEt/NDE3NS5qcGVn.jpeg",
    title: "Weirdo - Normalisation [CD]",
    description: "Tinrib Recordings RIBCD2011",
    id: v4()
},
{
    quantity: 500,
    price: 4,
    image: "https://f4.bcbits.com/img/a2127355404_10.jpg",
    title: "Hypersurface - Nipper's Trip [Digital]",
    description: "Digital Download of Nipper's Trip",
    id: v4()
},
{
    quantity: 1,
    price: 1000000,
    image: "https://upload.wikimedia.org/wikipedia/en/5/58/Who-Is-William-Onyeabor-cover.jpg",
    title: "Who is William Onyeabor?",
    description: "High Chief in Enugu",
    id: v4()   
}]

export default defaultProducts;