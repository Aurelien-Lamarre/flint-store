import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
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
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.itemPrice}</CardSubtitle>
          <CardText>{props.itemDescription}</CardText>
          <Link to='/cart'><Button>Cart</Button></Link>
        </CardBody>
      </Card>
    </div>
    </>
  ); 
}

export default CardItems;
