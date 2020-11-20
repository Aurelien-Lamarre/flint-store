import React, { useState, useEffect } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';

const Diy = () => {

  const hammer = JsonFAke.filter(items => items.fK_subCategory === 5);
  const stick = JsonFAke.filter(items => items.fK_subCategory === 6);
  
  return (
    <>
      <h1>DIY page</h1>
      <DisplaySubCategories props={hammer} title={hammer[0].fK_subCategory } />
      <DisplaySubCategories  props={stick} title={stick[0].fK_subCategory } />
    </>
  );
}

export default Diy;