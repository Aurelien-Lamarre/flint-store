import React from 'react'; 
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import JsonFake from './../static/JsonFAke.json';

const Button1 = Styled.button`
width:35em;
height:25em;
display:flex;
margin:3em;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:5px;
background-image: url("https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2018/01/firey6.jpg");
background-repeat: no-repeat;
background-position: center center;
size: fit-content;
`;
const Button2 = Styled.button`
width:35em;
height:25em;
display:flex;
margin:3em;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:5px;
background-image: url("https://www.bidouillesikea.com/wp-content/uploads/2016/04/DIY-IKEA.jpg");
background-repeat: no-repeat;
background-position: center center;
size: fit-content;
`;
const Button3 = Styled.button`
width:35em;
height:25em;
display:flex;
margin:3em;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:5px;
background-image: url("https://p4.wallpaperbetter.com/wallpaper/428/152/847/weapons-guns-knife-cartridges-wallpaper-preview.jpg");
background-repeat: no-repeat;
background-position: center center;
size: fit-content;
`;
const Button4 = Styled.button`
width:35em;
height:25em;
display:flex;
margin:3em;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:5px;
background-image: url("https://i.kym-cdn.com/photos/images/newsfeed/001/284/994/cad.jpg");
background-repeat: no-repeat;
background-position: center center;
size: fit-content;
`;
const WrapLink = Styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;`;

const Home = () => { 
  return(
    <WrapLink>
        <Link to='/lightandfire'><Button1></Button1></Link>
        <Link to='/diy'><Button2></Button2></Link>
        <Link to='/weaponsandhunting'><Button3></Button3></Link>
        <Link to='/torchparty'><Button4></Button4></Link>        
    </WrapLink>
  )
  
}

export default Home; 