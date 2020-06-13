// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';
import { Link } from "react-scroll"
import "./menu.css"

const MenuLink = props => (
    <Link activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000} 
            className="MenuLink"
            >{props.children}</Link> 
)

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuLink to="about">
        About
      </MenuLink>
      <MenuLink to="experience">
        Experience
        </MenuLink>
      <MenuLink to="contact">
        Contact
        </MenuLink>
        <a href="resume.pdf" target="_blank" className="MenuLink">RESUME</a>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;