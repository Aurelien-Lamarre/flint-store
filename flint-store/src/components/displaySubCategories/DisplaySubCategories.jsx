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
  margin-top: 20px;
  `;

const Title = Styled.h1`
  color: white;
  height:50%;
  margin: 10px;
  border-bottom: 2px solid white;
  `;
  const Wrap = Styled.div`
  display:flex;
  flex-direction:column;
  margin: 30px;
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


