import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store'
import { itemState } from './interfaces/interfaces';
import defaultProducts from '../data/defaultProducts';

const initialState: itemState = defaultProducts;

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        "ADD_ITEM": newItem => {
            const { quantity, price, title, id, image, description } = newItem;
            Object.assign(state, newItem, {
                [id]: {
                    title: title,
                    price: price,
                    image: image,
                    description: description,
                    quantity: quantity,
                    id: id,
                }
            });
        },
        "DELETE_ITEM": id => {
            const newState = { ...state };
            delete newState[id]
            return newState;    
        }
        default:
            return state;
    }
})

export default itemSlice.reducer