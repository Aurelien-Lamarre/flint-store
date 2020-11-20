
import React from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';
import Styled from 'styled-components';
import CardItems from './displaySubCategories/CardItems';

const LightAndFire = () => {
 
  const allumette = JsonFAke.filter(items => items.fK_subCategory === 1);
  const lighter = JsonFAke.filter(items => items.fK_subCategory === 2);
  const torch = JsonFAke.filter(items => items.fK_subCategory === 3);
  const bbq = JsonFAke.filter(items => items.fK_subCategory === 4);


  return (
    <>

      <h1>Light and Fire page</h1>
      
        <DisplaySubCategories props={allumette} title={allumette[0].fK_subCategory } />
      
      
        <DisplaySubCategories  props={lighter} title={lighter[0].fK_subCategory } />
      
      
        <DisplaySubCategories props={torch} title={torch[0].fK_subCategory } />
      
      
        <DisplaySubCategories props={bbq} title={bbq[0].fK_subCategory } />
      

    </>
  );
}

export default LightAndFire;
