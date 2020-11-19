import React from 'react';
import CardItems from './CardItems';

const DisplaySubCategories = ({type, title}) => {
  
  return (
     <div>
      <p>DisplaySubCategories page</p>
      <div>
        <h1>{title}</h1>
        { type.map(item => {
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
     </div>    
  );
}

export default DisplaySubCategories;