import React from 'react'
import { Container} from 'reactstrap'
import CartItem from './CartItem';
import Styled from 'styled-components';

const SelectShoppingWrap = Styled.div`
background: white;
padding:2em;
`;

const CartItems = (props) => {
  let cartItemsList = props.items.map(item => {
    return(
      <CartItem key={item.ItemId} item={item} />
    )
  })

  let totalPrice = props.items.reduce((acc, currValue) => {
    console.log(currValue)
    return acc + (currValue.quantity * (currValue.product.itemPrice/100))
  }, 0)

  let totalItems = props.items.reduce((acc, currValue) => {
    return acc + Number(currValue.quantity)
  }, 0)


  return (
    <Container>
      <SelectShoppingWrap>
      <div className="container shopping-cart">
        <h3 className="cart-title">Shopping Cart Items</h3>
        <div className="collection">
          <div className="collection-item row cart-items-header">
            <div className="col s8 mb-3">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          {cartItemsList}
        </div>
        <div className="collection">
          <div className="collection-item row cart-items-totals">
            <div className="col s8">Shopping Cart Totals</div>
            <div className="col s2">{parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2)}  <span role="img" aria-label="boar">🐗</span> </div>
            <div className="col s2">Qty: {totalItems}</div>
          </div>
        </div>
        </div>
        </SelectShoppingWrap>
    </Container>

  )
}
export default CartItems
