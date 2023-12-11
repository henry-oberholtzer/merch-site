import { actionInterface, itemState } from "../components/interfaces/interfaces";


const reducer = (state: itemState = {}, action: actionInterface) => {
const { quantity, price, title, id, image, description } = action;
    switch (action["type"]) {
        case "ADD_ITEM": {
            return Object.assign({}, state, {
                [id]: {
                    title: title,
                    price: price,
                    image: image,
                    description: description,
                    quantity: quantity,
                    id: id,
                }
            });
        }
        case "DELETE_ITEM": {
            const newState = { ...state };
            delete newState[id]
            return newState;    
        }
        default:
            return state;
    }
}

export default reducer;