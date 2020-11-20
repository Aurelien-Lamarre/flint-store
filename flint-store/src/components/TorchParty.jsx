import React, { useState, useEffect } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';


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
      <h1>Torch Party!</h1>
      <DisplaySubCategories props={smoke} title={smokeTitle} />
      <DisplaySubCategories props={food} title={foodTitle} />
      <DisplaySubCategories props={wines} title={winesTitle} />
      <DisplaySubCategories props={beers} title={beersTitle} />
    </>
  );
}

export default TorchParty;