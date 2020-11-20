import React from 'react'; 
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Button = Styled.button`
width:15em;
height:10em;
display:flex;
margin:3em;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:5px;
`;
const WrapLink = Styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;`;

const Home = () => {
  return(
    <WrapLink>
        <Button><Link to='/lightandfire'>Fire and Light</Link></Button>
        <Button><Link to='/diy'>DIY</Link></Button>
        <Button><Link to='/weaponsandhunting'>Weapons and Hunting</Link></Button>
        <Button><Link to='/torchparty'>Torch Party</Link></Button>        
    </WrapLink>
  )
  
}

export default Home; 