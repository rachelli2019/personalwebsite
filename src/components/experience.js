import React from "react"
import "./experience.css"

const Timeline = ({ children }) =>
  <div className="timelineContainer">
    <ul className="timeline">
      {children}
    </ul>
  </div>

const Event = ({ title, subtitle, interval, children }) =>
  <li className="event">
    <div className="body" id="block">
      <p className="date">{interval}</p>
      <h3 className="expTitle">{title}</h3>
      <h4 className="expSubtitle">{subtitle}</h4>
      <div className="description">
        {children}
      </div>
    </div>
    <label className="icon"></label>
  </li>

export default function Experience() {
    return (
        <div>
        <Timeline>
      <Event interval={"Current"} title={"Research Intern"} subtitle={"IBM"}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      <Event interval={"2019-2020"} title={"Campus Analyst"} subtitle={"Romulus Capital"}>
      Sourcing and diligence for early stage Seed and Series A startups in B2B enterprise focusing on the application and commercialization of technology with a sector focus in biotechnology.
      </Event>
      <Event interval={"2019-2020"} title={"Analyst"} subtitle={"Harvard College Consulting Group (HCCG)"}>
      Developed a national care-expansion strategy for a Fortune 500 medical devices manufacturer; compiled and analyzed large datasets to evaluate efficiency of service and care nationwide.
      </Event>
      <Event interval={"2018-2019"} title={"Simons Summer Research Fellow"} subtitle={"Ojima Lab, Stony Brook University"}>
      Conducted tuberculosis drug discovery research;
        designed a library of novel FtsZ inhibitor compounds and predicted efficacy using molecular docking analysis, molecular dynamics simulations, and 3D-QSAR modeling;
        part of Simons Summer Research Program funded by the Simons Foundation.
      </Event>
      <Event interval={"2017-2018"} title={"Garcia Research Scholar"} subtitle={"Garcia Center for Polymers at Engineered Interfaces, Stony Brook University"}>
      Designed and synthesized a novel hybrid hydrogel material composed of gelatin and Pluronic F127 to treat dental disease; 
      material properties characterized using confocal microscopy, FTIR spectroscopy, rheology, DSC, and UV-Vis spectrophotometry;
        research funded by NSF
    </Event>
    <div className="resumeContainer">
      <a href="resume.pdf" target="_blank" className="resumeButton">View my resume</a>
    </div>
    </Timeline>
        </div>
        )
    }

// export default function Experience() {
//     return (
//     <div className="timeline">
//         <Block
//             position="Intern"
//             company="IBM Research"
//             description="insert a description woot woot"
//             image="icon"
//             date="Summer 2020"
//         />
//     </div>
//     )
// }