import React, { useState, useEffect } from 'react';
import CardItems from './CardItems';
import Styled from 'styled-components';
import JsonFake from './../../static/JsonFAke.json';

const DisplaySubCategories = ({props,title}) => {
  // const [list, setList] = useEffect([]);
  // let x = (types) => types.filter((v,i) => types.indexOf(v) === i)

  // const calcOrderSummary = (ordersArr) => 
  // ordersArr.reduce((acc, item) => {
  //   acc[item.user] = item.amount;
  //   return acc;
  // },{})


  // x(props.type);
  return (

    <>
      <h1>{ title}</h1>
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


{/* props.reduce((acc, i) => {
          if (acc.hasOwnProperty(acc.type)) {
            acc = i
            return (
              <h1>{ acc}</h1>
            )
          }
        }) */}

