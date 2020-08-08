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
      <Event interval={"Current"} title={"Founder / Co-President"} subtitle={"Group for Undergraduates in Statistics At Harvard (GUSH)"}>
      Lead the executive team to organize speaker and alumni panel events, educational workshops, social events, and volunteer initiatives for over 100 Harvard undergraduates; organized summer mentorship program pairing 40 first-year students with upperclassmen mentors. Check out our website at <a href="https://www.harvardgush.org/" target="_blank">harvardgush.org</a> for updates on exciting events we have planned!
      </Event>
      <Event interval={"Current"} title={"Teaching Fellow for Stat 110 (Introduction to Probability)"} subtitle={"Harvard University"}>
      Lead weekly section and hold office hours for students in Harvard’s intro statistics course.
      </Event>
      <Event interval={"Current"} title={"Quantum Software Developer Intern"} subtitle={"IBM Research"}>
      Designed and implemented front end (React.js, Redux, Bootstrap) and back end (Python, SQLAlchemy,REST) for quantum hardware assembly configuration management; designed database infrastructure for health questionnaire mobile app; completed Qiskit Quantum Computing Summer School for interns and IBM Intern Hackathon.
      </Event>
      <Event interval={"2019-2020"} title={"Analyst"} subtitle={"Harvard College Consulting Group (HCCG)"}>
      Developed a national care-expansion strategy for a Fortune 500 medical devices manufacturer; compiled and analyzed large datasets to evaluate efficiency of service and care nationwide.
      </Event>
      <Event interval={"2019-2020"} title={"Campus Analyst"} subtitle={"Romulus Capital"}>
      Sourcing and diligence for early stage Seed and Series A startups in B2B enterprise focusing on the application and commercialization of technology with a sector focus in biotechnology.
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