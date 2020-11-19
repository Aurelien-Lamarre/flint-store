import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';
import Styled from 'styled-components';

import CardItems from './displaySubCategories/CardItems';

const CardWrap = Styled.div`
  display: flex;
  flex-direction: row;
  `;
const LightAndFire = () => {
  const [type, setType] = useState([]);
  useEffect(() => {
    const { url } = './../static/JsonFAke.json'
    axios.get(url)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setType(data)

      })
  })
  
  const alumette = JsonFAke.filter(items => items.type === "Alumette");
  const lighter = JsonFAke.filter(items => items.type === "Briquet");
  const torch = JsonFAke.filter(items => items.type === "Torche");
  const bbq = JsonFAke.filter(items => items.type === "Barbecue");

  return (
    <>
      <h1>Light and Fire page</h1>
      <CardWrap>
        <DisplaySubCategories props={alumette} title={alumette[0].type } />
      </CardWrap>
      <CardWrap>
        <DisplaySubCategories  props={lighter} title={lighter[0].type } />
      </CardWrap>
      <CardWrap>
        <DisplaySubCategories props={torch} title={torch[0].type } />
      </CardWrap>
      <CardWrap>
        <DisplaySubCategories props={bbq} title={bbq[0].type } />
      </CardWrap>
    </>
  );
}

export default LightAndFire;



// JsonFAke.filter(el => el.category === "Feu et Lumiere").map(item => {
//   <p>{item.title }</p>
//   })