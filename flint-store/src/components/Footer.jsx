import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled, {css} from 'styled-components'

const NavFooter = styled.div`
  display: flex;
  background-color: #343a40;
  font-size: 1.3em;
  height: 3em;
  align-items: center;
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
      <NavFooter>
        <NavItemFooter>
          <NavLink href="/lightandfire">Fire and Light</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink href="/diy">D.I.Y</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink href="/weaponsandhunting">Weapons</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink href="/torchparty">Torch Party</NavLink>
        </NavItemFooter>
      </NavFooter>
      <hr />
    </div>
  );
}

export default Footer;