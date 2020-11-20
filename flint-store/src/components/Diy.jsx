import React, { useEffect, useState } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import Styled from 'styled-components';
import axios from 'axios';

const Title = Styled.h1`
  text-align: center;
  margin: 30px;
  color: white;
  text-shadow: 1px -5px 3px black;
  `;

const Diy = () => {
  const [diy, setDiy] = useState([]);
  useEffect(() => {
    const url = "http://flintstore.azurewebsites.net/flintStore";
    axios.get(url)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setDiy(data)
      })
  },[])

  const hammer = diy.filter(items => items.fK_subCategory === 5);
  const stick = diy.filter(items => items.fK_subCategory === 6);
  
  const hammerTitle = "Hammers";
  const stickTitle = "Sticks";


  return (
    <>
      <Title>D.I.Y. ACCESSORIES <span role="img" aria-label="hammer">⚒️</span></Title>
      <DisplaySubCategories props={hammer} title={hammerTitle } />
      <DisplaySubCategories  props={stick} title={stickTitle } />
    </>
  );
}

export default Diy;