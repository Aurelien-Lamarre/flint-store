import React, { useState, useEffect } from 'react';
import CardItems from './CardItems';
import JsonFake from './../../static/JsonFAke.json';

const DisplaySubCategories = ({props}) => {
  // const [list, setList] = useEffect([]);
  
  return (

  <>
    <p>Type</p>
      {
        props.map(el => {
          return (
            <CardItems key={el.item_id} props={el} />
          )
        })
    }
    </>
  )
  ;
}

export default DisplaySubCategories;