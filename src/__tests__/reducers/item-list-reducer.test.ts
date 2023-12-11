import itemListReducer from "../../components/reducers/item-list-reducer";
import { ItemData, itemState } from "../../components/interfaces/interfaces";


describe('itemListReducer', () => {

    let action;
    const newProductdata: ItemData = {
        quantity: 20,
        price: 11.99,
        image: "https://i.discogs.com/28792eJdBsWi65IcafyNZvQXZ5bk7wPyWxWomqIOqbY/rs:fit/g:sm/q:90/h:416/w:417/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODY5/LTEyMzEzMjEwMjUu/anBlZw.jpeg",
        title: 'D.R. Base vs Karim - Barracuda / Funky 303 [12"]',
        description: "Tinrib Recordins RIB001",
        id: '1234-5678-96505'
    };

    const currentData: itemState = {
        '0000': {
            quantity: 20,
            price: 11.99,
            image: "https://i.discogs.com/28792eJdBsWi65IcafyNZvQXZ5bk7wPyWxWomqIOqbY/rs:fit/g:sm/q:90/h:416/w:417/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODY5/LTEyMzEzMjEwMjUu/anBlZw.jpeg",
            title: 'D.R. Base vs Karim - Barracuda / Funky 303 [12"]',
            description: "Tinrib Recordins RIB001",
            id: '0000',
        },
        '0001': {
            quantity: 10,
            price: 10.00,
            image: "https://i.discogs.com/wDIn6eFelh-yLGehUdRdvtYTrHSMK-hH2IeLnIYIFlc/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg2/NS0xNDY1MDY4Nzgw/LTUzNTEuanBlZw.jpeg",
            title: "Fish Tales Vol. 4 - Alien Lobster Abduction [CD]",
            description: "Tinrib Recordings RIBCD2008",
            id: '0001'
        }
    }

    test('Should return default state if no action is passed into the reducer', () => {
        const { quantity, price, title, image, description, id } = newProductdata
        expect(itemListReducer({ }, {
            type: 'DEFAULT',
            quantity: quantity,
            price: price,
            title: title,
            image: image,
            description: description,
            id: id,
        })).toEqual({})
    })

    test('Should successfully add a new item to the product list', () => {
        const { quantity, price, title, image, description, id } = newProductdata
        action = {
            type: 'ADD_ITEM',
            quantity: quantity,
            price: price,
            title: title,
            image: image,
            description: description,
            id: id,
        }
        expect(itemListReducer({}, action)).toEqual({
            [id]: {
                quantity: quantity,
                price: price,
                title: title,
                image: image,
                description: description,
                id: id,
            }
        })
    })

    test('Should successfully delete a ticket', () => {
        action = {
            type: 'DELETE_ITEM',
            id: '0000'
        }
        expect(itemListReducer(currentData, action)).toEqual({
            '0001': {
                quantity: 10,
                price: 10.00,
                image: "https://i.discogs.com/wDIn6eFelh-yLGehUdRdvtYTrHSMK-hH2IeLnIYIFlc/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg2/NS0xNDY1MDY4Nzgw/LTUzNTEuanBlZw.jpeg",
                title: "Fish Tales Vol. 4 - Alien Lobster Abduction [CD]",
                description: "Tinrib Recordings RIBCD2008",
                id: '0001'
            }
        })
    })
})