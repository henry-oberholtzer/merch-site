import { ItemData } from "./Body";
import PropTypes from "prop-types";

const ItemSpecifics = (props: ItemSpecifics) => {
    return(
        <>
        <button onClick={() => props.backButton(0)}>Return To Products</button>
        <hr />
        <h3>{props.item.title}</h3>
        {props.item.image !== "" ? <img src={props.item.image} alt={props.item.title} /> : <h1>No Image Available</h1>} 
        <p>Price: ${props.item.price}</p>
        <p>In Stock: {props.item.quantity}</p>
        <button onClick={() => props.purchaseItem(props.item.id)}>Purchase</button>
        <hr />
        <button onClick={() => props.editItem(props.item.id)}>Edit Item</button>
        <button onClick={() => props.deleteItem(props.item.id)}>Delete Item</button>
        </>
    );
}

ItemSpecifics.propTypes = {
    item: PropTypes.object,
    purchaseItem: PropTypes.func,
    backButton: PropTypes.func,
    deleteItem: PropTypes.func
}

interface ItemSpecifics {
    item: ItemData
    purchaseItem: (arg1: string) => void;
    backButton: (arg1: number) => void;
    deleteItem: (arg1: string) => void;
    editItem: (arg1: string) => void;
}

export default ItemSpecifics;