import defaultProducts from "../data/defaultProducts";
import ItemDisplay from "./ItemDisplay";
import ItemForm from "./ItemForm";
import ItemSpecifics from "./ItemSpecifics";
import { useState } from "react";

export interface ItemData {
  quantity: number,
  price: number,
  image: string,
  title: string,
  description: string,
  id: string,
}

const Body = () => {
  const [itemList, setItemList] = useState<ItemData[]>(defaultProducts)
  const [pageView, setPageView] = useState<number>(0)
  const [selectedItem, setSelectedItem] = useState<string>("")
  const [itemBeingEdited, setItemBeingEdited] = useState<ItemData>()

  const addNewItem = (formData: ItemData) => {
    if(itemList.filter(el => el.id === formData.id)[0]){
      setItemList(itemList => itemList.map(el => (el.id === formData.id ? formData : el )))
    } else {
      setItemList(oldList => [...oldList, formData])
    }
    setPageView(0);
  }
  const displayItemSpecifics = (id: string) => {
    setPageView(1)
    setSelectedItem(id)
  }
  const purchaseItem = (idRecieved: string) => {
    const quantity = itemList.filter((el) => el.id === idRecieved)[0].quantity - 1
    setItemList(itemList => itemList.map(el => (el.id === idRecieved ? {...el, quantity} : el )))
  }
  const deleteItem = (idRecieved: string) => {
    setItemList(itemList => itemList.filter(el => el.id !== idRecieved))
    setPageView(0)
  }

  const editItem = (idRecieved: string ) => {
    const item = itemList.filter(el => el.id === idRecieved)[0]
    setItemBeingEdited(item)
    setPageView(2)
  }

  let currentView;
  if (pageView === 0) {
    currentView =
    <>    
    <ItemForm
        handleFormSubmissionFunction={addNewItem}
        buttonText="Add New Item"
        itemData={defaultProducts[0]}
        isNewItem={true}
      />
    <ItemDisplay
    itemList={itemList}
    callbackFunction={displayItemSpecifics}/>
    </> 
  } else if (pageView === 1) {
    currentView =
    <ItemSpecifics
      item={itemList.filter((item: ItemData) => item.id === selectedItem)[0]}
      purchaseItem={purchaseItem}
      backButton={setPageView}
      deleteItem={deleteItem}
      editItem={editItem}
    />
  } else if (pageView === 2 && itemBeingEdited) {
    currentView =
    <ItemForm
      handleFormSubmissionFunction={addNewItem}
      buttonText="Finish Editing"
      itemData={itemBeingEdited}
      isNewItem={false}
    />
  }

  return (
    <>
      {currentView} 
    </>
  )
}

export default Body;