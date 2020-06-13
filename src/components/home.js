import React from "react"
import Desc from "./desc"
import Art from "./art/art"
import "./home.css"
import { Link } from "react-scroll"
import styled from 'styled-components'

const HomeContainer = styled.div`
    box-sizing: border-box; 
    min-height: 100vh;
    width: 100vw;
    ${'' /* margin: 10%;
    margin-top: 20%;
    position: relative;
    minHeight: 100vh;
    height: 80vh; */}
    ${'' /* border: 4px solid teal; */}
    @media(max-width: 576px) {
        margin-top: 30%;
        overflow: hidden;
    }
`;

const Span1 = styled.div`
    display: block;
    width: 55px;
    height: 55px;
    border-bottom: 4px solid black;
    border-right: 4px solid black;
    transform: rotate(45deg);
    margin: -20px;

    :hover {
        border-bottom: 4px solid #0D3B66;
        border-right: 4px solid #0D3B66;
    }
`
const Span2 = styled.div`
    display: block;
    width: 55px;
    height: 55px;
    border-bottom: 4px solid black;
    border-right: 4px solid black;
    transform: translateY(-35px) rotate(45deg);
    margin: -20px;

    :hover {
        border-bottom: 4px solid #0D3B66;
        border-right: 4px solid #0D3B66;
        transform: translateY(-10px) rotate(45deg);
        animation: animate 2s infinite;
    }
`

export default function Homepage() {
    return(
        <HomeContainer>
            <Desc className="desc"/>
            <Art/>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}>
                <div className="arrow">
                    <Span1></Span1>
                    <Span2></Span2>
                </div>
            </Link>
        </HomeContainer>
    )  
}