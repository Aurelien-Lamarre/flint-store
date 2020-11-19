import React from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';

const LightAndFire = () => {
  
  const allumette = JsonFAke.filter(items => items.type === "Allumette");
  const briquet = JsonFAke.filter(items => items.type === "Briquet");
  const torche = JsonFAke.filter(items => items.type === "Torche");
  const barbecue = JsonFAke.filter(items => items.type === "Barbecue");



  return (
    <>

      <h1>Light and Fire page</h1>
      
      <DisplaySubCategories type={allumette} title={allumette[0].type} />
      <DisplaySubCategories type={briquet} title={briquet[0].type}/>
      <DisplaySubCategories type={torche} title={torche[0].type}/>
      <DisplaySubCategories type={barbecue} title={barbecue[0].type}/>
    </>
  );
}

export default LightAndFire;