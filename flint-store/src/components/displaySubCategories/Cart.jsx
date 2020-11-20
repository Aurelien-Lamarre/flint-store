import React, { Component } from 'react';
import Styled from 'styled-components'
import ShoppingCart from './CartPage/ShoppingCart'
import JsonFake from './../../static/JsonFAke.json'

const CartWrap = Styled.div`
width: 100%;
margin-bottom: 3em;
`;

class Cart extends Component {
  constructor(){
    super()
    this.state = {
      items: [
        // { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        // { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        // { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
        // { id: 4, product: { id: 75, name: 'Scooby-Doo Compass', priceInCents: 2525 }, quantity: 4 },
      ],
      products: JsonFake
    }
  }

  addItemFunction = (newItem) => {
    this.setState({items: this.state.items.concat(newItem)})
  }

  render() {
    return (
      <CartWrap>
        <ShoppingCart items={this.state.items} products={this.state.products} addItemFunction={this.addItemFunction}/>
      </CartWrap>
    );
  }
}

export default Cart;