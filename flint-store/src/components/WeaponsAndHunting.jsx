import React, { useState, useEffect } from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';


const WeaponsAndHunting = () => {
  const mace = JsonFAke.filter(items => items.fK_subCategory === 7);
  const spear = JsonFAke.filter(items => items.fK_subCategory === 8);
  const sling = JsonFAke.filter(items => items.fK_subCategory === 9);
  const bow = JsonFAke.filter(items => items.fK_subCategory === 10);
  const arrow = JsonFAke.filter(items => items.fK_subCategory === 11);

  const maceTitle = "Maces";
  const spearTitle = "Spears";
  const slingTitle = "Slings";
  const bowTitle = "Bows";
  const arrowTitle = "Arrows";

  return (
    <>
      <h1>Weapons and Hunting equipments</h1>
      <DisplaySubCategories props={mace} title={maceTitle} />
      <DisplaySubCategories props={spear} title={spearTitle} />
      <DisplaySubCategories props={sling} title={slingTitle} />
      <DisplaySubCategories props={bow} title={bowTitle} />
      <DisplaySubCategories props={arrow} title={arrowTitle} />
    </>
  );
}

export default WeaponsAndHunting;