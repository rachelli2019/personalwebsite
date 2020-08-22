import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import "./projects.css"
    
export default function Projects() {
    return(
      <Carousel style={{width: '80%', margin: '3% auto'}}>
        <Carousel.Item id='item'>
          <a href="https://tech4blm.netlify.app/" target="_blank">
          <img
            className="d-block w-100"
            src="/images/tech4blm.png"
            alt="tech4blm"
            id="img"
          />
          <Carousel.Caption className='caption'>
            <h3>Tech4BLM</h3>
            <p>Online database to connect STEM undergraduates with volunteer opportunities at social justice organizations.</p>
          </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://soul-matcher.herokuapp.com/" target="_blank">
          <img
            className="d-block w-100"
            src="/images/soulmatcher.png"
            alt="soulmatcher"
            id="img"
          />
          <Carousel.Caption className='caption'>
            <h3>Soulmatcher</h3>
            <p>Personality test & dating website.</p>
          </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/officehours.png"
            alt="officehours"
            id="img"
          />

          <Carousel.Caption className='caption'>
            <h3>Office Hours</h3>
            <p>Live video and Q&A interface for remote teaching.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )  
}
