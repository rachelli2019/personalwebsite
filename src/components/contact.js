import React from "react"
import IconInstagram from "./icons/insta"
import Icon from "./icons/icon"
import styled from "styled-components"

const message = {
    position: 'relative',
    fontSize: '150%',
    textAlign: 'center',
    margin: '0 auto',
    padding: '0 auto',
    // border: '4px solid pink',
}

const StyledIconContainer = styled.div`
    text-align: center;
    margin: 3em auto;
    margin-left: 4%;
    ${'' /* marginLeft: '100px', */}
    margin-bottom: 0;
    @media(max-width: 576px) {
        margin: 2em auto;
        padding-left: 15%;
        ${'' /* border: 4px solid lavender; */}
    }
    @media(max-width: 376px) {
        padding-left: 23%;
        ${'' /* border: 4px solid lavender; */}
    }
`  
export default function Contact() {
    return ( 
        <div>
            <h3 style={message}>Get in touch!</h3>
            <StyledIconContainer>
                <Icon icon="facebook" link="https://www.facebook.com/rachel.li.2019"/>
                {/* <Icon icon="instagram"/> */}
                <IconInstagram link="https://www.instagram.com/rac431li/"/>
                <Icon icon="github" link="https://github.com/rachelli2019"/>
                <Icon icon="linkedin" link="https://www.linkedin.com/in/rachel-li-127080185/"/>
                <Icon icon="mail" link="mailto:rachelli@college.harvard.edu"/>
            </StyledIconContainer>
        </div>
    )
}