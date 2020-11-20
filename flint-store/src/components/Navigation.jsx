import React, {useState} from 'react'; 
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarToggler onClick={toggleNavbar} className="mr-4" />
        <NavbarBrand href="/" className="mr-4">Flint Store</NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="mr-4">
              <NavLink href="/lightandfire" className="nav-link">Fire and Light</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink href="/diy">D.I.Y.</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink href="/weaponsandhunting">Weapons</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink href="/torchparty">Torchlight Party</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
