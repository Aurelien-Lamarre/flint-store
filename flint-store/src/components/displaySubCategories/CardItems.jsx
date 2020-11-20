import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './CardItems.css';

import Styled from 'styled-components';


const CardItems = ({props}) => {
  return (
    <>
      <div className="cardBody">
      <Card>
        <CardImg className='image'  src={props.itemImg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.itemName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.itemPrice} <span role="img" aria-label="boar">🐗</span></CardSubtitle>
          <CardText>{props.itemDescription}</CardText>
          <Button>Add to cart</Button>
        </CardBody>
      </Card>
    </div>
    </>
  ); 
}

export default CardItems;
