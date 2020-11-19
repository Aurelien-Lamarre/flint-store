import React, { useState, useEffect } from 'react';
import CardItems from './CardItems';
import JsonFake from './../../static/JsonFAke.json';

const DisplaySubCategories = ({props}) => {
  // const [list, setList] = useEffect([]);
  
  return (

  <>
    <h1>Type</h1>
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