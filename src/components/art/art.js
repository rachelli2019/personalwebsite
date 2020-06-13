import React, {Component} from "react"
import BigArt from "./bigart"
import SmallArt from "./smallart"

class Art extends Component {
    state = {
      smallArt: false,
    };

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize());
      }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
    }
    
    // toggles art size based on the screen width

    handleResize = () => {
        if (window.innerWidth > 940 && this.state.smallArt) {
            this.toggleMenu();
        }
        if (window.innerWidth < 940 && !this.state.smallArt) {
            this.toggleMenu();
        }
    };

    toggleMenu = () => this.setState({ smallArt: !this.state.smallArt });

    render() {
        const smallArt = this.state.smallArt;
        // check if in a mobile screen or tablet
        if (window.innerWidth < 940 && !this.state.smallArt) {
            this.toggleMenu();
        }

        if (smallArt) {
            return (
                <SmallArt/>
            )
        }
        return (<BigArt/>)
    }

}

export default Art

// export default function Art() {
//     // check if in a mobile screen
//     if (window.innerWidth < 576) {
//         return (
//             <SmallArt/>
//         )
//     }
//     else {
//         return (
//             <BigArt/>
//         )
//     }
// }

