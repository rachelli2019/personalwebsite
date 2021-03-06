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

const StyledSkills = styled.ul`
    font-size: 2.5vmin;
    display: grid;
    grid-template-columns: auto auto auto;
    line-height: normal;
    margin-top: 2%;
    @media( max-width: 576px ) {
        grid-template-columns: auto auto;
        font-size: 80%;
        margin: 5%;
        margin-left: 10%;
        width: 100%;
        ${'' /* border: 4px solid lavender; */}
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
                    Hi! I'm Rachel. I'm currently a sophomore at Harvard studying in Computer Science & Statistics.
                </StyledTitle>
                <StyledDesc>
                <p>
                I'm hungry to learn more and tackle the most difficult challenges. In my free time, I love to read, bake cakes and macarons, and go hiking in beautiful places.
                </p>
                <p> Recent skills I've been working with:</p>
                </StyledDesc>
                <StyledSkills>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>R</li>
                    <li>HTML & CSS</li>
                    <li>Python</li>
                    <li>SQLAlchemy</li>
                </StyledSkills>
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