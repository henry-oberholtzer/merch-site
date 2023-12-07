import { ItemData } from "./Body";
import PropTypes from 'prop-types';

const CartInfo = (props: CartInfo) => {
    const cartTotalItems = props.cartList.reduce((totalItems, item) => {
        return totalItems + item.quantity; 
    }, 0);
    return (
        <button onClick={() => props.setPageView(3)}>Cart: {cartTotalItems}
        </button>
    )
}

CartInfo.propTypes = {
    cartList: PropTypes.array,
}

interface CartInfo {
    cartList: ItemData[]
    setPageView: (arg1: number) => void;
}

export default CartInfo;
