import React from "react"
import styled from "styled-components"

const BioContainer = styled.div`
    float: right;
    ${'' /* position: relative; */}
    width: 45%;
    margin: 3%;
    margin-left: 0;
    
    @media (max-width: 1320px) {
        width: 100%;
        line-height: normal;
        margin: 1rem auto; 
        margin-top: 0;
        padding: 0 0.3rem;
  }
`; 

const StyledTitle = styled.p`
    font-size: 26pt;
    font-size: 4vmin;
    font: Varela Round;
    font-weight: bold;
    
    @media (max-width: 576px) {
    font-size: 125%;
  }
`;

const StyledDesc = styled.p`
    font-size: 16pt;
    font-size: 3vmin;
    @media (max-width: 576px) {
    font-size: 120%;
  }
  @media(max-width: 320px) {
      font-size: 90%;
  }
`;

const StyledPic = styled.div`
    display: inline-block;
    max-width: 500px;
    width: 100%;
    height: auto;
    position: relative;
    margin: 3%;
    margin-bottom: -2%;
    ${'' /* border: 4px solid pink; */}
    ${'' /* float: left; */}
    @media( max-width: 1320px ) {
        display: block;
        margin: 5% auto;
    }
`

export default function About() {
    return(
        <div>
            <StyledPic>
                <img src={"profpic3.jpg"} />
            </StyledPic>
            <BioContainer>
                <StyledTitle>
                    Hi! I'm Rachel. I'm an undergraduate student at Harvard College concentrating in Statistics.
                </StyledTitle>
                <StyledDesc>
                blippity bloppity bloop whoop poopity scoop insert some bs here woot woot yeah!
                </StyledDesc>
                <StyledDesc>
                Here's where i would list my skills if i had skills woo!
                </StyledDesc>
                <StyledDesc>
                Amazing picture credit to iris su!
                </StyledDesc>
            </BioContainer>
        </div>
    )  
}

// css-in-js

// const styledBio = {
//     boxSizing: 'border-box',
//     fontSize: 30,
//     float: 'right',
//     width: '45%',
//     font: 'Varela Round',
//     fontWeight: 'bold',
// }

// const bioDesc = {
//     boxSizing: 'border-box',
//     fontSize: 24,
//     float: 'right',
//     width: '45%',
// }

// const container = {
//     overflow: 'hidden',
// }