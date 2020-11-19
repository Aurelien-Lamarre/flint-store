import React, { useState, useEffect } from 'react';

const CardItems = ({ props }) => {
  {console.log(props)}
  return (
    <>
      <div>
        <p>{ props.item}</p>
        <img src={props.item_img_url} />
        <p>{ props.item_description}</p>
      </div>
    </>
  );
}

export default CardItems;