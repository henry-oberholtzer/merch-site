import { ItemData, cartAdjustObj, itemDeleteObj } from "./interfaces/interfaces";
import "./CartItem.css";

const CartItem = (props: CartItemProps) => {
  return (
    <div className="cartItem" key={props.item.id}>
      <img src={props.item.image} className="cartItemImage"></img>
      <div className="cartItemDesc">
        <p>{props.item.title}</p>
        <p><strong>${props.item.price}</strong></p>
      </div>
      <div className="cartItemTotal">
        <tr>
          <td>
            In Cart:
          </td>
          <td>
            <input
              className="cartItemQuantity"
              type="number"
              min="1"
              max={props.quantityInStock}
              value={props.item.quantity > props.quantityInStock ? props.quantityInStock : props.item.quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value)
                  props.adjustFunction({
                    id: props.item.id,
                    quantity: value
                  })
              }}
            >
            </input>
          </td>
        </tr>
        <tr>
          <td>
            <p>Total: {props.item.price * props.item.quantity}</p>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => props.deleteFunction({
              id: props.item.id,
              listName: "cartList"
            })}>Remove From Cart</button>
          </td>
        </tr>
      </div>
    </div>
  )
}

interface CartItemProps {
  item: ItemData
  quantityInStock: number;
  deleteFunction: (arg1: itemDeleteObj) => void;
  adjustFunction: (arg1: cartAdjustObj) => void;
}

export default CartItem;