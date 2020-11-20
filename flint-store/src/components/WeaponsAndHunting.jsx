import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import Styled from 'styled-components';

const Title = Styled.h1`
  text-align: center;
  margin: 30px;
  color: white;
  text-shadow: 1px -5px 3px black;
  `;


const WeaponsAndHunting = () => {
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    const url = "http://flintstore.azurewebsites.net/flintStore";
    axios.get(url)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setWeapons(data)
      })
  },[])

  const mace = weapons.filter(items => items.fK_subCategory === 7);
  const spear = weapons.filter(items => items.fK_subCategory === 8);
  const sling = weapons.filter(items => items.fK_subCategory === 9);
  const bow = weapons.filter(items => items.fK_subCategory === 10);
  const arrow = weapons.filter(items => items.fK_subCategory === 11);

  const maceTitle = "Maces";
  const spearTitle = "Spears";
  const slingTitle = "Slings";
  const bowTitle = "Bows";
  const arrowTitle = "Arrows";

  return (
    <>
      <Title>WEAPONS AND HUNTING EQUIPEMENTS <span role="img" aria-label="arrow">🏹</span></Title>
      <DisplaySubCategories props={mace} title={maceTitle} />
      <DisplaySubCategories props={spear} title={spearTitle} />
      <DisplaySubCategories props={sling} title={slingTitle} />
      <DisplaySubCategories props={bow} title={bowTitle} />
      <DisplaySubCategories props={arrow} title={arrowTitle} />
    </>
  );
}

export default WeaponsAndHunting;