
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import Styled from 'styled-components';

const Title = Styled.h1`
  text-align: center;
  margin: 30px;
  color: white;
  text-shadow: 1px -5px 3px black;
  `;

const LightAndFire = () => {
  const [lightCat, setLightCat] = useState([]);
  useEffect(() => {
    const url = "http://flintstore.azurewebsites.net/flintStore";
    axios.get(url)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setLightCat(data)
      })
  },[])
 
  const allumette = lightCat.filter(items => items.fK_subCategory === 1);
  const lighter = lightCat.filter(items => items.fK_subCategory === 2);
  const torch = lightCat.filter(items => items.fK_subCategory === 3);
  const bbq = lightCat.filter(items => items.fK_subCategory === 4);

  const allumetteTitle = "Matches"; 
  const lighterTitle = "Lighters";
  const torchTitle = "Torches";
  const bbqTitle = "Barbecues"

  return (
    <>

      <Title>FIRE AND LIGHT <span role="img" aria-label="fire">🔥</span></Title>
      
        <DisplaySubCategories props={allumette} title={allumetteTitle} />
      
      
        <DisplaySubCategories  props={lighter} title={lighterTitle} />
      
      
        <DisplaySubCategories props={torch} title={torchTitle} />
      
      
        <DisplaySubCategories props={bbq} title={bbqTitle} />
      

    </>
  );
}

export default LightAndFire;
