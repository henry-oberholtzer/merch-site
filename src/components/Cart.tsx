import { ItemData, cartAdjustObj } from "./Body";
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
                        adjustFunction={props.adjustFunction}
                    />
                </div>
            )
        })
    }

    return(
        <>
        <button onClick={() => props.backButton(props.previousPageView)}><BackArrow /></button>
        <hr />
        {items}
        <button onClick={() => props.purchaseFunction}>Purchase</button>
        </>
    )
}

interface Cart {
    cartList: ItemData[],
    purchaseFunction: () => void
    adjustFunction: (arg1: cartAdjustObj) => void;
    backButton: (arg1: number) => void;
    previousPageView: number;
}

Cart.propTypes = {
    cartList: PropTypes.array,
    purchaseFunction: PropTypes.func,
    adjustFunction: PropTypes.func,
    backButton: PropTypes.func,
    previousPageView: PropTypes.number
}

export default Cart;