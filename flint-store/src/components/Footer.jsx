
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
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 1em
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
      <NavFooter className="NavItemFooterCss">
        <NavItemFooter>
          <NavLink className="NavItemLink" href="/privacy">Privacy</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink className="NavItemLink" href="/faq">F.A.Q</NavLink>
        </NavItemFooter>
        <NavItemFooter>
          <NavLink className="NavItemLink" href="/terms">Terms</NavLink>
        </NavItemFooter>
      </NavFooter>
  );
}

export default Footer;

