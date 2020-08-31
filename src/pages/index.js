import React from "react"
import Nav from "../components/nav"
import Homepage from "../components/home"
import Section from "../components/section"
import About from "../components/about"
import Experience from "../components/experience"
import Contact from "../components/contact"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"
import Projects from "../components/projects"

class Home extends React.Component{
  state = {
    isloaded: false
  }

  componentDidMount(){
    this.setState({isloaded: true})
  }

  render() {
    if (!this.state.isloaded) {
      return null;
    }
    return (
      <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
        <title>Rachel Li</title>
      </Helmet>
      <Homepage/>
      <Section
          title="ABOUT ME"
          id="about"
          children={<About/>}
          />
      <Section
        title="EXPERIENCE"
        id="experience"
        children={<Experience/>}
      />
      <Section
        title="PROJECTS"
        id="projects"
        children={<Projects/>}
      />
      <Section
        title="CONTACT"
        id="contact"
        children={<Contact/>}
      />
       <Nav />
       <Footer />
    </div>
    )
  }
}

export default Home;

// export default function Home() {
//   return (
//     <div>
//       <Helmet>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
//         <title>Rachel Li</title>
//       </Helmet>
//       <Homepage/>
//       <Section
//           title="ABOUT ME"
//           id="about"
//           children={<About/>}
//           />
//       <Section
//         title="EXPERIENCE"
//         id="experience"
//         children={<Experience/>}
//       />
//       <Section
//         title="PROJECTS"
//         id="projects"
//         children={<Projects/>}
//       />
//       <Section
//         title="CONTACT"
//         id="contact"
//         children={<Contact/>}
//       />
//        <Nav />
//        <Footer />
//     </div>
//   )
// }
