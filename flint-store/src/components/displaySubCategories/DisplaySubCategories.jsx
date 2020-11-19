import React from 'react';
import CardItems from './CardItems';

const DisplaySubCategories = ({type}) => {
  
  return (
     <div>
      <p>DisplaySubCategories page</p>
      <div>
        { type.map(item => {
          return (
            <CardItems 
              key={item.item_id}
              props ={item}
          />
          )
        })}
      </div>
     </div>    
  );
}

export default DisplaySubCategories;