import { ItemData, itemDeleteObj } from "./interfaces/interfaces";
import PropTypes from "prop-types";
import BackArrow from "./icons/BackArrow";
import CartAddIcon from "./icons/CartAddIcon";
import CartConfirmIcon from "./icons/CartConfirmIcon";
import { useState } from "react";

const ItemSpecifics = (props: ItemSpecifics) => {
    const [cartAdd, setCartAdd] = useState<boolean>(false)

    const cartSwitch = () => {
        setCartAdd(true)
        setTimeout(() => setCartAdd(false), 500);
    }

    return(
        <>
        <button onClick={() => props.backButton(props.previousPageView)}><BackArrow/></button>
        <hr />
        <h3>{props.item.title}</h3>
        {props.item.image !== "" ? <img src={props.item.image} alt={props.item.title} /> : <h1>No Image Available</h1>} 
        <p><em>{props.item.description}</em></p>
        <p>Price: ${props.item.price} | Stock: {props.item.quantity}</p>
        <button onClick={() => {props.addToCart(props.item.id); cartSwitch()}}>{cartAdd ? <CartConfirmIcon /> : <CartAddIcon />}</button>
        <hr />
        <button onClick={() => props.editItem(props.item.id)}>Edit Item</button>
        <button onClick={() => props.deleteItem({
            id: props.item.id,
            listName: "itemList"})}>Delete Item</button>
        </>
    );
}

ItemSpecifics.propTypes = {
    item: PropTypes.object,
    addToCart: PropTypes.func,
    previousPageView: PropTypes.number,
    backButton: PropTypes.func,
    deleteItem: PropTypes.func
}

interface ItemSpecifics {
    item: ItemData
    addToCart: (arg1: string) => void;
    backButton: (arg1: number) => void;
    previousPageView: number;
    deleteItem: (arg1: itemDeleteObj) => void;
    editItem: (arg1: string) => void;
}

export default ItemSpecifics;