import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'
import "./Footer.css"

const NavFooter = styled.div`
  display: flex;
  background-color: #343a40;
  font-size: 1em;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em;
  margin: 1em
`;

const NavItemFooter = styled.div`
color: white;
text-decoration: none
margin right: 1em
`;

const NaviLink = styled.link`
color: white;
text-decoration: none
margin right: 1em
margin top : 1em
padding top: 10em 
`;

const Footer = (props) => {
  return (
    <div>
      <NavFooter className="NavItemFooterCss">
        <NavItemFooter>
          <NavLink className="NavItemLink" href="/lightandfire">Fire and Light</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink className="NavItemLink" href="/diy">D.I.Y</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink className="NavItemLink" href="/weaponsandhunting">Weapons</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink className="NavItemLink" href="/torchparty">Torch Party</NavLink>
        </NavItemFooter>
      </NavFooter>
      <hr />
    </div>
  );
}

export default Footer;