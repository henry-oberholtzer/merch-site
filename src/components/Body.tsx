import defaultProducts from "../data/defaultProducts";
import ItemDisplay from "./ItemDisplay";
import ItemForm from "./ItemForm";
import ItemSpecifics from "./ItemSpecifics";
import CartInfo from "./CartInfo";
import { useState } from "react";
import Cart from "./Cart";
import Header from "./Header";
import { connect, ConnectedProps } from "react-redux";
import PropTypes from 'prop-types'
import { ItemData, cartAdjustObj, itemState } from "./interfaces/interfaces";

const mapState = (state: itemState) => ({
  itemList: state
})
const mapDispatch = {
  addItem: (obj: ItemData) => ({ type: 'ADD_ITEM', ...obj }),
  deleteItem: (id: string) => ({ type: 'DELETE_ITEM', id })
}
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {

}

const Body = (props: Props) => {
  const [cartList, setCartList] = useState<itemState>({})
  const [selectedItem, setSelectedItem] = useState<string>("")
  const [itemBeingEdited, setItemBeingEdited] = useState<ItemData>()
  const [pageView, setPageView] = useState<number>(0)
  const [previousPageView, setPreviousPageView] = useState<number>(0)
  const { deleteItem } = props;

  const pageChange = (pageNumber: number) => {
    setPreviousPageView(pageView)
    setPageView(pageNumber);
  }
  const addNewItem = (formData: ItemData) => {
    const { addItem } = props;
    const { quantity, price, title, image, description, id } = formData
    const action = {
      type: 'ADD_ITEM',
      quantity: quantity,
      price: price,
      title: title,
      image: image,
      description: description,
      id: id,
    }
    addItem(action)
    pageChange(0);
  }

  const displayItemSpecifics = (id: string) => {
    pageChange(1)
    setSelectedItem(id)
  }

  const addToCart = (idRecieved: string) => {
    const item = props.itemList[idRecieved]
    if (cartList[idRecieved]) {
      const quantity = cartList[idRecieved].quantity + 1
      const newCartItem = {...cartList[idRecieved], quantity}
      setCartList({...cartList, newCartItem})
    } else if (!cartList[idRecieved]) {
      const quantity = 1;
      const newItem = { ...item, quantity }
      setCartList({...cartList, newItem})
    }
  }
  const cartAdjustFunction = (object: cartAdjustObj) => {
    const quantity = object.quantity
    setCartList(cartList => cartList.map(el => (el.id === object.id ? { ...el, quantity } : el)))
  }

  const editItem = (idRecieved: string) => {
    const item = props.itemList[idRecieved]
    setItemBeingEdited(item)
    setPageView(2)
  }
  const purchaseFunction = () => {
    const newItemList = itemList.map((itemEl) => {
      const cartItem = cartList.filter(cartEl => cartEl.id === itemEl.id)[0]
      if (cartItem) {
        const quantity = itemEl.quantity - cartItem.quantity;
        return { ...itemEl, quantity }
      } else {
        return itemEl
      }
    })
    setItemList(newItemList);
    setCartList({})
  }

  let currentView;
  if (pageView === 0) {
    currentView =
      <>
        <ItemDisplay
          itemList={itemList}
          callbackFunction={displayItemSpecifics} />
        <hr />
        <button onClick={() => pageChange(4)}>Add New Item</button>
      </>
  } else if (pageView === 1) {
    currentView =
      <>
        <ItemSpecifics
          item={props.itemList[selectedItem]}
          addToCart={addToCart}
          backButton={setPageView}
          previousPageView={previousPageView}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </>
  } else if (pageView === 2 && itemBeingEdited) {
    currentView =
      <>
        <ItemForm
          handleFormSubmissionFunction={addNewItem}
          buttonText="Finish Editing"
          itemData={itemBeingEdited}
          isNewItem={false}
        />
      </>
  } else if (pageView === 3) {
    currentView =
      <Cart
        cartList={cartList}
        itemList={itemList}
        purchaseFunction={purchaseFunction}
        adjustFunction={cartAdjustFunction}
        backButton={pageChange}
        previousPageView={previousPageView}
        deleteFunction={deleteItem}
      />
  } else if (pageView === 4) {
    currentView =
      <ItemForm
        handleFormSubmissionFunction={addNewItem}
        buttonText="Add New Item"
        itemData={defaultProducts[0]}
        isNewItem={true}
      />
  }
  return (
    <>
      <Header
        homeButton={pageChange}
        cartToRender={
          <CartInfo
            cartList={cartList}
            setPageView={pageChange}
          />
        }
      />
      <hr />
      {currentView}
    </>
  )
}

Body.propTypes = {
  itemList: PropTypes.object
}

export default Body;