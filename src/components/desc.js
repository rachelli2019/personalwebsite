import React from "react"
import styled from 'styled-components'

const StyledDesc = styled.div `
    width: 40%;
    position: relative;
    margin: 8%;
    margin-right: 0;
    margin-top: 0vh;
    ${'' /* border: 4px solid aqua; */}
    display: inline-block;

    @media(max-width: 770px){
        width: 45%;
        padding-top: 20vh;
    }

    @media(max-width: 576px){
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0 3rem;
    }
`

const StyledTitle = styled.p `
    font-size: 300%;
    font-size: 5vmin;
    font-weight: bold;
    margin: 0;
    line-height: normal;

    @media(max-width: 1130px){
        font-size: 250%;
    }

    @media(max-width: 576px){
        font-size: 200%;
    }
`

const StyledSubtitle = styled.p`
    font-size: 200%;
    font-size: 4vmin;
    line-height: 1.6;

    @media(max-width: 1130px){
        font-size: 175%;
    }

    @media(max-width: 576px){
        font-size: 150%;
    }
`

export default function Desc() {
    return(
        <StyledDesc>
            <StyledTitle>
                Hi my name is 
            </StyledTitle>
            <StyledTitle>
            Rachel Li.
            </StyledTitle>
            <StyledSubtitle>
                I am passionate about using data science to change the world.
            </StyledSubtitle>
        </StyledDesc>
    )  
}

// const styledDesc = {
//     flex: 'none',
//     width: '45%',
//     float: 'left',
// }
// const title = {
//     fontSize: '300%',
//     fontWeight: 'bold',
//     margin: 0,
// }
// const description = {
//     fontSize: '200%',
// }