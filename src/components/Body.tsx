import defaultProducts from "../data/defaultProducts";
import ItemDisplay from "./ItemDisplay";
import ItemForm from "./ItemForm";
import ItemSpecifics from "./ItemSpecifics";
import CartInfo from "./CartInfo";
import { useState } from "react";
import Cart from "./Cart";
import Header from "./Header";

export interface ItemData {
  quantity: number,
  price: number,
  image: string,
  title: string,
  description: string,
  id: string,
}
export interface cartAdjustObj {
  id: string,
  quantity: number,
}
export interface itemDeleteObj {
  id: string,
  listName: "cartList" | "itemList"
}
const Body = () => {
  const [itemList, setItemList] = useState<ItemData[]>(defaultProducts)
  const [pageView, setPageView] = useState<number>(0)
  const [previousPageView, setPreviousPageView] = useState<number>(0)
  const [selectedItem, setSelectedItem] = useState<string>("")
  const [itemBeingEdited, setItemBeingEdited] = useState<ItemData>()
  const [cartList, setCartList] = useState<ItemData[]>([])
  const pageChange = (pageNumber: number) => {
    setPreviousPageView(pageView)
    setPageView(pageNumber);
  }
  const addNewItem = (formData: ItemData) => {
    if (itemList.filter(el => el.id === formData.id)[0]) {
      setItemList(itemList => itemList.map(el => (el.id === formData.id ? formData : el)))
    } else {
      setItemList(oldList => [...oldList, formData])
    }
    pageChange(0);
  }
  const displayItemSpecifics = (id: string) => {
    pageChange(1)
    setSelectedItem(id)
  }
  const addToCart = (idRecieved: string) => {
    const item = itemList.filter(el => el.id === idRecieved)[0]
    if (cartList.filter(el => el.id === idRecieved)[0]) {
      const quantity = cartList.filter(el => el.id === idRecieved)[0].quantity + 1
      setCartList(cartList => cartList.map(el => (el.id === idRecieved ? { ...el, quantity } : el)))
    } else {
      const quantity = 1;
      setCartList([...cartList, { ...item, quantity }])
    }
  }
  const cartAdjustFunction = (object: cartAdjustObj) => {
    const quantity = object.quantity
    setCartList(cartList => cartList.map(el => (el.id === object.id ? { ...el, quantity } : el)))
  }
  const deleteItem = (obj: itemDeleteObj) => {
    if (obj.listName === "itemList") {
      setItemList(itemList => itemList.filter(el => el.id !== obj.id))
    } else if (obj.listName === "cartList") {
      setCartList(cartList => cartList.filter(el => el.id !== obj.id))
    }
    setPageView(0)
  }
  const editItem = (idRecieved: string) => {
    const item = itemList.filter(el => el.id === idRecieved)[0]
    setItemBeingEdited(item)
    setPageView(2)
  }
  const purchaseFunction = () => {
    console.log("purchase function")
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
    setCartList([])
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
          item={itemList.filter((item: ItemData) => item.id === selectedItem)[0]}
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
export default Body;