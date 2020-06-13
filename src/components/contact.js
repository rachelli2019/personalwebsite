import React from "react"
import IconInstagram from "./icons/insta"
import Icon from "./icons/icon"

const message = {
    position: 'relative',
    fontSize: '150%',
    textAlign: 'center',
    margin: '0 auto',
}

const iconContainer = {
    textAlign:'center',
    margin: '3em',
    marginLeft: '100px',
}
export default function Contact() {
    return ( 
        <div>
            <h3 style={message}>Get in touch!</h3>
            <div style={iconContainer}>
                <Icon icon="facebook" link="https://www.facebook.com/rachel.li.2019"/>
                {/* <Icon icon="instagram"/> */}
                <IconInstagram link="https://www.instagram.com/rac431li/"/>
                <Icon icon="github" link="https://github.com/rachelli2019"/>
                <Icon icon="linkedin" link="https://www.linkedin.com/in/rachel-li-127080185/"/>
                <Icon icon="mail" link="mailto:rachelli@college.harvard.edu"/>
            </div>
        </div>
    )
}