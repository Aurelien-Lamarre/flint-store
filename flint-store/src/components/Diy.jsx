import React, { useState, useEffect } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';

const Diy = () => {

  const hammer = JsonFAke.filter(items => items.fK_subCategory === 5);
  const stick = JsonFAke.filter(items => items.fK_subCategory === 6);
  
  const hammerTitle = "Hammers";
  const stickTitle = "Sticks";


  return (
    <>
      <h1>D.I.Y. accessories</h1>
      <DisplaySubCategories props={hammer} title={hammerTitle } />
      <DisplaySubCategories  props={stick} title={stickTitle } />
    </>
  );
}

export default Diy;