import React from "react"
import styled from 'styled-components'

const StyledFooter = styled.footer`
    margin: -4rem auto;
    text-align: center;
    ${'' /* margin-left: 43%;
    margin-right: 43%;
    margin-top: -20%;
    width: 14%; */}
    font-size: 70%;
`

export default function Footer() {
    return (
        <StyledFooter>Designed & Built by Rachel Li &copy; 2020</StyledFooter>
    )
}