import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

const Img = Styled.img`
width: 50%;
height: 50%`
  ;

const CardItems = ({props}) => {
  return (
    <>
      <div>
        <Img src={props.item_img_url} alt="" /> 
        <h1>{props.item}</h1>
        <p>{props.item_description}</p>
        <p>{props.item_price}</p>
      </div>
    </>
  );
}

export default CardItems;