import React from "react"
import "./nav.css"
//import { Link } from "gatsby"
import { Link } from "react-scroll"


const ListLink = props => (
        <li className="navLink">
                <Link activeClass="active"
                        to={props.to}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000} 
                        className="navText"
                        style={{fontSize:'24px', fontFamily:'Varela Round', fontWeight:'lighter'}}>{props.children}</Link> 
        </li>   
    )

export default function NavBar({ children }) {
    return (
    <div>
        <header style={{ marginBottom: `4.5rem` }}>
            <p className="title" style={{fontSize:'32px', fontWeight:'bold'}}>Rachel Li</p>
            <ul className="navRight">
                <ListLink to="about">ABOUT</ListLink>
                <ListLink to="experience">EXPERIENCE</ListLink>
                <ListLink to="contact">CONTACT</ListLink>
                <a href="resume.pdf" target="_blank" className="navText"
                        style={{fontSize:'24px', fontFamily:'Varela Round', fontWeight:'lighter'}}>RESUME</a>
            </ul>
        </header>
        {children}
    </div>
    )
}