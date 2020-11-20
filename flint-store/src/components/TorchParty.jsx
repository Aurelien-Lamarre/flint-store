import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import Styled from 'styled-components';

const Title = Styled.h1`
  text-align: center;
  margin: 30px;
  color: white;
  text-shadow: 1px -5px 3px black;S
  `;

const TorchParty = () => {
  const [torch, setTorch] = useState([]);
  useEffect(() => {
    const url = "http://flintstore.azurewebsites.net/flintStore";
    axios.get(url)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setTorch(data)
      })
  },[])


  const smoke = torch.filter(items => items.fK_subCategory === 12);
  const food = torch.filter(items => items.fK_subCategory === 13);
  const wines = torch.filter(items => items.fK_subCategory === 14);
  const beers = torch.filter(items => items.fK_subCategory === 15);

  const smokeTitle = "To smoke";
  const foodTitle = "Foodstuff";
  const winesTitle = "Wines";
  const beersTitle = "Beers";

  return (
    <>
      <Title>TORCHLIGHT PARTY! <span role="img" aria-label="party">🎉</span></Title>
      <DisplaySubCategories props={smoke} title={smokeTitle} />
      <DisplaySubCategories props={food} title={foodTitle} />
      <DisplaySubCategories props={wines} title={winesTitle} />
      <DisplaySubCategories props={beers} title={beersTitle} />
    </>
  );
}

export default TorchParty;