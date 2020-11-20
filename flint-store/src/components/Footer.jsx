import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import './Footer.css'
 
const FooterWrap = Styled.div`
  display:flex;
  flex-direction: column;
  height: 10em;
  width:100%;
  background: slategrey;
  `;

const Footer = () => {
  return (
    <FooterWrap>
      <Link className='footerlink' to='/privacy'>Privacy</Link>
      <Link className='footerlink' to='/faq'>FAQ</Link>
      <Link className='footerlink' to='/terms'>Terms</Link>
    </FooterWrap>
  );
}

export default Footer;