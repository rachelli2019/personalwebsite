import React, { Component } from "react"
import BurgerNav from "./burgerNav"
import NavBar from "./navbar"

class Nav extends Component {
    state = {
      menuOpen: false,
    };

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize());
        window.addEventListener('scroll', () => this.handleScroll());
        // check if in a mobile screen
        if (window.innerWidth < 1200 && !this.state.menuOpen) {
            this.toggleMenu();
        }
      }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
        window.removeEventListener('scroll', () => this.handleScroll());
    }
    
    // toggles the nav bar to hamburger nav based on screen width

    handleResize = () => {
        if (window.innerWidth > 1200 && this.state.menuOpen) {
            this.toggleMenu();
        }
        if (window.innerWidth < 1200 && !this.state.menuOpen) {
            this.toggleMenu();
        }
        // console.log(window.innerWidth)
    };

    // toggles the nav bar to hamburger nav based on scroll location

    handleScroll = () => {
        if (window.scrollY < 95 && this.state.menuOpen && window.innerWidth > 970) {
            this.toggleMenu();
        }
        if (window.scrollY > 95 && !this.state.menuOpen) {
            this.toggleMenu();
        }
        // console.log(window.scrollY)
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

    render () {
        const menuOpen = this.state.menuOpen;

        // fade-in transition for hamburger component
        // const burgerFade = {
        //     transition: 'opacity 5s',
        //     opacity: 1,
        // }
        // const burgerHide = {
        //     opacity: 0,
        // }
        // const burgerStyle = menuOpen ? {burgerFade} : {burgerHide}

        if (menuOpen) {
            return (
                <BurgerNav/>
            )
        }
        return (<NavBar/>)
    }

}

export default Nav;