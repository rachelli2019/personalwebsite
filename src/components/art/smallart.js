import React from "react"
import { ArtContainer } from "./art.styled.js"

//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
// colors: (FAF0CA, F4D35E, 0D3B66), (81F4E1, 56CBF9,FF729F)

class SmallArt extends React.Component {

    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")

    function init() {
        window.requestAnimationFrame(draw);
    }
    function draw(evt) {
        //var pos = getMousePos(canvas, evt);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 600, 600); // clear canvas
      
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.strokeStyle = 'black';
        ctx.save();
        ctx.translate(180, 150); // IMPLEMENT change position here to follow mouse move

        // center
        var time = new Date();
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx.translate(8, 0);
        ctx.beginPath();
        ctx.fillStyle = "#0D3B66";
        ctx.arc(0, 0, 30, 0, Math.PI * 2, false); // center circle
        ctx.fill();
        ctx.save();
       
        // middle
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        ctx.translate(80, 0);
        ctx.beginPath();
        ctx.fillStyle = "#FAF0CA";
        ctx.arc(0, 0, 15, 0, Math.PI * 2, false); // earth orbit
        ctx.fill();
      
        // outer
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx.translate(0, 25);
        ctx.beginPath();
        ctx.fillStyle = "#F4D35E";
        ctx.arc(0, 0, 7, 0, Math.PI * 2, false); // moon orbit
        ctx.fill();

        ctx.restore();
    
        ctx.beginPath();
        ctx.arc(0, 0, 80, 0, Math.PI * 2, false); // orbit
        ctx.stroke();
        ctx.restore();
      
        window.requestAnimationFrame(draw);
      }
      
      init();
    }
    render() {
      return(
        <ArtContainer>
          <canvas ref="canvas" width={300} height={300}/>
        </ArtContainer>
      )
    }
  }
  export default SmallArt



