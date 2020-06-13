import styled from "styled-components";

// formatting for the div
export const ArtContainer = styled.div`
    display: inline-block;
    width: 410px;
    height: 410px;
    margin-top: 22vh;
    margin-left: 8%;
    ${'' /* float: right; */}
    position: relative;
    ${'' /* border: 4px solid pink; */}

    @media(max-width: 940px){
        width: 300px;
        height: 300px;
        margin-left: 5%;
    }

    @media(max-width:576px){
        width: 300px;
        height: 300px;
        position: absolute;
        top: 18vh;
        right: 0%;
        width: 100%;
    }
    @media(max-width:360px) {
        opacity:0;
    }
`;
