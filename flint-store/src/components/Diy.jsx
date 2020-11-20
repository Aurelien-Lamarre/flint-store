import React from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';
import Styled from 'styled-components';

const Title = Styled.h1`
  text-align: center;
  margin: 30px;
  `;

const Diy = () => {

  const hammer = JsonFAke.filter(items => items.fK_subCategory === 5);
  const stick = JsonFAke.filter(items => items.fK_subCategory === 6);
  
  const hammerTitle = "Hammers";
  const stickTitle = "Sticks";


  return (
    <>
      <Title>D.I.Y. accessories<span role="img" aria-label="hammer">⚒️</span></Title>
      <DisplaySubCategories props={hammer} title={hammerTitle } />
      <DisplaySubCategories  props={stick} title={stickTitle } />
    </>
  );
}

export default Diy;