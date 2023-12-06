# Merch Site

A Typescript & React.js application by Teddy Peterschmidt & Henry Oberholtzer

# Description

- User can create items
- User can read items in the store
- User can update items in the store
- Items should store name, description and quantity, and an item ID
- User can increase or descrease quantity of an item by an amount
- User cannot "Buy" items if the quantity is zero
# Component Diagram

- App
- Body
  * Contains state of displaying ItemDisplay, ItemSpecifics or ItemForm
    - state contains array of objects ItemData
        * quantity
        * price
        * image
        * title
        * description
        * ID
  - ItemDisplay
    - Grid displaying all items, including title and price
  - ItemSpecifics
    - RenderItemData
      * Display the passed ItemData
    * Buy Item (Changes quantity state)
    * Restock Item (Changes QuantityInStock state)
    * Delete Item (Removes ItemData from parent state)
    - ItemForm (Edits a specific ItemData)
  - ItemForm (Creates a new ItemData)

