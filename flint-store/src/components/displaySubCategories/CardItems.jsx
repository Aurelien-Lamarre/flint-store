import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

const Img = Styled.img`
width: 50%;
height: 50%`
  ;

const CardItems = ({ props }) => {
  {console.log(props)}
  return (
    <>
      <div>
        <p>{ props.item}</p>
        <Img src={props.item_img_url} />
        <p>{ props.item_description}</p>
      </div>
    </>
  );
}

export default CardItems;