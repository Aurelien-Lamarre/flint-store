import React from 'react'
import CartItems from './CartItems'
import AddItem from './../CartPage/AddItem'
import Styled from 'styled-components';

const CartWrapper = Styled.div`
height: 80vh;
padding-top: 10em;
`;

const ShoppingCart = ({items, products, addItemFunction}) => {
  return (
    <CartWrapper>
      <AddItem products={products} addItemFunction={addItemFunction}/>
      <CartItems items={items} />
    </CartWrapper>
  )
}
export default ShoppingCart;