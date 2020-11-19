import React, { useState, useEffect } from 'react';

const CardItems = ({props}) => {
  return (
    <>
      <div>
        <img src={props.item_img_url} alt="" /> 
        <h1>{props.item}</h1>
        <p>{props.item_description}</p>
        <p>{props.item_price}</p>
      </div>
    </>
  );
}

export default CardItems;