
import React from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';
import Styled from 'styled-components';
import CardItems from './displaySubCategories/CardItems';


// const CardWrap = Styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   `;

const LightAndFire = () => {

  const allumette = JsonFAke.filter(items => items.type === "Allumette");
  const lighter = JsonFAke.filter(items => items.type === "Briquet");
  const torch = JsonFAke.filter(items => items.type === "Torche");
  const bbq = JsonFAke.filter(items => items.type === "Barbecue");

  return (
    <>
      <h1>Light and Fire page</h1>
      {/* <CardWrap> */}
        <DisplaySubCategories props={allumette} title={allumette[0].type } />
      {/* </CardWrap> */}
      
      {/* <CardWrap> */}
        <DisplaySubCategories  props={lighter} title={lighter[0].type } />
      {/* </CardWrap> */}

      {/* <CardWrap> */}
        <DisplaySubCategories props={torch} title={torch[0].type } />
      {/* </CardWrap> */}

      {/* <CardWrap> */}
        <DisplaySubCategories props={bbq} title={bbq[0].type } />
      {/* </CardWrap> */}

    </>
  );
}

export default LightAndFire;
