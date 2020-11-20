import React from 'react';
import CardItems from './CardItems';
import Styled from 'styled-components';

const CardWrap = Styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items:center;
  justify-content: space-evenly;
  flex-wrap:wrap;
  `;

const Title = Styled.h1`
  height:50%;
  `;
  const Wrap = Styled.div`
  display:flex;
  flex-direction:column;
  `;


const DisplaySubCategories = ({props, title}) => {
  
  return (
    <>
      <Wrap>
      <Title>{title}</Title>
        <CardWrap>
         { props.map(item => {
            return (
                <CardItems 
                  key={item.itemId}
                  props ={item}
               />
            )
          })}
        </CardWrap> 
        </Wrap>
    </>

  );
}

export default DisplaySubCategories;


