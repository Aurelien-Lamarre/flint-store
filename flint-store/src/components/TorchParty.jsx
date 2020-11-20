import React, { useState, useEffect } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';


const TorchParty = () => {
  const smoke = JsonFAke.filter(items => items.fK_subCategory === 12);
  const food = JsonFAke.filter(items => items.fK_subCategory === 13);
  const wines = JsonFAke.filter(items => items.fK_subCategory === 14);
  const beers = JsonFAke.filter(items => items.fK_subCategory === 15);

  return (
    <>
      <h1>Torch Party page !</h1>
      <DisplaySubCategories props={smoke} title={smoke[0].fK_subCategory } />
      <DisplaySubCategories props={food} title={food[0].fK_subCategory } />
      <DisplaySubCategories props={wines} title={wines[0].fK_subCategory } />
      <DisplaySubCategories props={beers} title={beers[0].fK_subCategory } />
    </>
  );
}

export default TorchParty;