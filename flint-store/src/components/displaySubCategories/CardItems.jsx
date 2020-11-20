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
        <CardImg className='image'  src={props.item_img_url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.item}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.item_price}</CardSubtitle>
          <CardText>{props.item_description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    </>
  ); 
}

export default CardItems;
