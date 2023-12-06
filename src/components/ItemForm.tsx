import { useState } from "react";
import PropTypes from "prop-types"
import { ItemData } from "./Body";
import { v4 }from 'uuid';

const ItemForm = (props: ItemFormProps) => {
  const [form, setForm] = useState<ItemData>({
    title: "Product",
    image: "https://en.wikipedia.org/wiki/T-shirt#/media/File:Blue_Tshirt.jpg",
    description: "A Nice Product",
    quantity: 5,
    price: 4.99,
    id: ""
  })

  return (
    <>
      <form onSubmit={(e) => {
        setForm({
          ...form,
          id: v4()
        })
        console.log(form)
        e.preventDefault(); props.handleFormSubmissionFunction(form)}}>
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
          value={form.image}
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
          value={form.description}
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
          value={form.quantity}
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
          value={form.price}
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
  buttonText: PropTypes.string
}

interface ItemFormProps {
  handleFormSubmissionFunction:(arg1: ItemData) => void,
  buttonText: string
}

export default ItemForm;