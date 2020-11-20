import React, { useState, useEffect } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';


const WeaponsAndHunting = () => {
  const mace = JsonFAke.filter(items => items.fK_subCategory === 7);
  const spear = JsonFAke.filter(items => items.fK_subCategory === 8);
  const sling = JsonFAke.filter(items => items.fK_subCategory === 9);
  const bow = JsonFAke.filter(items => items.fK_subCategory === 10);
  const arrow = JsonFAke.filter(items => items.fK_subCategory === 11);


  return (
    <>
      <h1>Weapons and Hunting equipments page</h1>
      <DisplaySubCategories props={mace} title={mace[0].fK_subCategory } />
      <DisplaySubCategories props={spear} title={spear[0].fK_subCategory } />
      <DisplaySubCategories props={sling} title={sling[0].fK_subCategory } />
      <DisplaySubCategories props={bow} title={bow[0].fK_subCategory } />
      <DisplaySubCategories props={arrow} title={arrow[0].fK_subCategory } />
    </>
  );
}

export default WeaponsAndHunting;