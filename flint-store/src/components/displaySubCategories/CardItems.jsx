import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './CardItems.css';


const CardItems = ({props}) => {
  return (
    <>
      <div className="cardBody">
      <Card>
        <CardImg className='image'  src={props.itemImg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.itemName}</CardTitle>
          <CardText>{props.itemDescription}</CardText>
          <div className="price-button-container">
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.itemPrice} <span role="img" aria-label="boar">🐗</span></CardSubtitle>
          <Button>Add to cart</Button>
          </div>
        </CardBody>
      </Card>
    </div>
    </>
  ); 
}

export default CardItems;
