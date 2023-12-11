import { ItemData, cartAdjustObj, itemDeleteObj } from "./interfaces/interfaces";
import CartItem from "./CartItem";
import PropTypes from 'prop-types';
import BackArrow from "./icons/BackArrow";

const Cart = (props: Cart) => {
    let items;
    if (!props.cartList) {
        items = <h6><em>Nothing here yet!</em></h6>
    } else if (props.cartList) {
        items = props.cartList.map((cartItem) => {
            return (
                <div key={cartItem.id}>
                    <CartItem
                        item={cartItem}
                        quantityInStock={props.itemList.filter(el => el.id === cartItem.id)[0].quantity}
                        adjustFunction={props.adjustFunction}
                        deleteFunction={props.deleteFunction}
                    />
                </div>
            )
        })
    }

    return (
        <>
            <button onClick={() => props.backButton(props.previousPageView)}><BackArrow /></button>
            <hr />
            {items}
            <hr />
            <button onClick={() => props.purchaseFunction()}>Purchase</button>
        </>
    )
}

interface Cart {
    cartList: ItemData[],
    itemList: ItemData[],
    purchaseFunction: () => void;
    adjustFunction: (arg1: cartAdjustObj) => void;
    backButton: (arg1: number) => void;
    previousPageView: number;
    deleteFunction: (arg1: itemDeleteObj) => void;
}

Cart.propTypes = {
    cartList: PropTypes.array,
    purchaseFunction: PropTypes.func,
    adjustFunction: PropTypes.func,
    backButton: PropTypes.func,
    previousPageView: PropTypes.number,
    deleteFunction: PropTypes.func,
}

export default Cart;