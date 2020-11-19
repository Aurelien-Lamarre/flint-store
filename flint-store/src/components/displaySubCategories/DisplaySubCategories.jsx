import React from 'react';
import CardItems from './CardItems';
import Styled from 'styled-components';
import JsonFake from './../../static/JsonFAke.json';

const DisplaySubCategories = ({props, title}) => {
  
  return (
      <div>
        <h1>{title}</h1>
        { props.map(item => {
          return (
            <div>
              <CardItems 
                key={item.item_id}
                props ={item}
              />
            </div>
          )
        })}
      </div>   
  );
}

export default DisplaySubCategories;


