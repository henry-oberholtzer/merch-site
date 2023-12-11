import { useState } from "react";
import PropTypes from "prop-types"
import { ItemData } from "./interfaces/interfaces";
import { v4 }from 'uuid';

const ItemForm = (props: ItemFormProps) => {
  const [form, setForm] = useState<ItemData>({
    title: props.itemData.title,
    image: props.itemData.image,
    description: props.itemData.description,
    quantity: props.itemData.quantity,
    price: props.itemData.price,
    id: props.itemData.id
  })

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault(); 
        const id = v4()
        if (props.isNewItem === true) {
          props.handleFormSubmissionFunction({...form, id})
        } else {
          props.handleFormSubmissionFunction(form)
            }
          }
        }>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={e => {
              setForm({
                ...form,
                title: e.target.value
              })
            }
            }
          >
        </input>
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          defaultValue={form.image.toString()}
          onChange={e => {
              setForm({
                ...form,
                image: e.target.value
              })
            }
          }>
        </input>
      </div>
      <div>
        <label htmlFor="description">Item Description:</label>
        <input
          type="textarea"
          id="description"
          name="description"
          defaultValue={form.description}
          onChange={e => {
            setForm({
              ...form,
              description: e.target.value
            })
          }
          }>
        </input>
      </div>
      <div>
        <label htmlFor="quantity">Quantity in Stock:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="1"
          defaultValue={form.quantity}
          onChange={e => {
            setForm({
              ...form,
              quantity: parseInt(e.target.value)
            })
          }
          }>
        </input>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          defaultValue={form.price}
          step="0.01"
          min="0"
          onChange={e => {
            setForm({
              ...form,
              price: parseInt(e.target.value)
            })
          }
          }>
        </input>
      </div>
      <button type="submit">{props.buttonText}</button>
    </form >
        </>
    )
}

ItemForm.propTypes = {
  handleFormSubmissionFunction: PropTypes.func,
  buttonText: PropTypes.string,
  itemData: PropTypes.object,
  isNewItem: PropTypes.bool
}

interface ItemFormProps {
  handleFormSubmissionFunction:(arg1: ItemData) => void,
  buttonText: string
  itemData: ItemData
  isNewItem: boolean
}

export default ItemForm;