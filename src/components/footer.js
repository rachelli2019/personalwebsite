import React from "react"
import styled from 'styled-components'

const StyledFooter = styled.footer`
    margin-left: 42%;
    margin-right: 42%;
    margin-bottom: 5%;
    ${'' /* width: 16%; */}
`

export default function Footer() {
    return (
        <StyledFooter>Designed & Built by Rachel Li</StyledFooter>
    )
}