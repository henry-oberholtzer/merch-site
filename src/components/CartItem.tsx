import { ItemData, cartAdjustObj } from "./Body";
import "./CartItem.css";

const CartItem = (props: CartItemProps) => {
  return (
    <div className="cartItem" key={props.item.id}>
      <img src={props.item.image} className="cartItemImage"></img>
      <div className="cartItemDesc">
        <p>{props.item.title}</p>
        <p>{props.item.price}</p>
      </div>
      <div className="cartItemTotal">
          <input className="cartItemQuantity" type="number" min="0" onChange={(e) => props.adjustFunction({ id: props.item.id, quantity: parseInt(e.target.value) })} defaultValue={props.item.quantity}></input>
          <p>Total: {props.item.price * props.item.quantity}</p>
      </div>
    </div>
  )
}

interface CartItemProps {
  item: ItemData
  // deleteFunction:
  adjustFunction: (arg1: cartAdjustObj) => void;
}

export default CartItem;