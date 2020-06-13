import React from "react"
import "./section.css"

// for debugging div spacing
// const styledDiv = {
//     outlineWdith: '5px',
//     outlineStyle: 'solid',
//     outlineColor: 'green',
//     width: '100%',
//   }

export default function Section({ title, children, id }) {
    return (
    <div className="sectionDiv" id={id}>
        <h1>{title}</h1>
      {children}
    </div>
    )
  }