import ItemDisplay from "./ItemDisplay";
import ItemForm from "./ItemForm";
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
  const [itemList, setItemList] = useState<ItemData[]>([])
  const addNewItem = (formData: ItemData) => {
    setItemList(oldList => [...oldList, formData])
  }
  const displayItemSpecifics = (id: string) => {
    console.log(id)
  }

  return (
    <>
      <ItemDisplay
        itemList={itemList}
        callbackFunction={displayItemSpecifics}/>
      <ItemForm
        handleFormSubmissionFunction={addNewItem}
        buttonText="Add New Item"
      />
      <p>{itemList[0] ? itemList[0].title : "nothing yet"}</p>
    </>
  )
}

export default Body;