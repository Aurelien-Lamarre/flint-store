import React from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';
import Styled from 'styled-components';

const Title = Styled.h1`
  text-align: center;
  margin: 30px;
  `;

const TorchParty = () => {
  const smoke = JsonFAke.filter(items => items.fK_subCategory === 12);
  const food = JsonFAke.filter(items => items.fK_subCategory === 13);
  const wines = JsonFAke.filter(items => items.fK_subCategory === 14);
  const beers = JsonFAke.filter(items => items.fK_subCategory === 15);

  const smokeTitle = "To smoke";
  const foodTitle = "Foodstuff";
  const winesTitle = "Wines";
  const beersTitle = "Beers";

  return (
    <>
      <Title>Torchlight Party! <span role="img" aria-label="party">🎉</span></Title>
      <DisplaySubCategories props={smoke} title={smokeTitle} />
      <DisplaySubCategories props={food} title={foodTitle} />
      <DisplaySubCategories props={wines} title={winesTitle} />
      <DisplaySubCategories props={beers} title={beersTitle} />
    </>
  );
}

export default TorchParty;