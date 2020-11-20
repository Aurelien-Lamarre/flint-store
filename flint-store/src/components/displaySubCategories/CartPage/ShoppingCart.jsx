import React from 'react'
import CartItems from './CartItems'
import CartItem from './CartItem'
import AddItem from './../CartPage/AddItem'

const ShoppingCart = ({items, products, addItemFunction}) => {
  let legalLine = "2018 | All Rights Reserved"
  return (
    <div>
      <AddItem products={products} addItemFunction={addItemFunction}/>
      <CartItems items={items} />
    </div>
  )
}
export default ShoppingCart