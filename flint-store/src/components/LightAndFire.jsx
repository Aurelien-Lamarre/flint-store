import React, { useState, useEffect } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';

const LightAndFire = () => {
  
  
  const alumette = JsonFAke.filter(items => items.type === "Alumette")

  return (
    <>

      <h1>Light and Fire page</h1>
      
      <DisplaySubCategories type={alumette}/>
    </>
  );
}

export default LightAndFire;