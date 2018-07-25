import React, { Component  } from "react";
import Navbar from "../../components/navbar/navbar";

class Header extends Component {
    render() {
        return(
            <div className="welcome d-flex justify-content-center flex-column">
                <header>
                    <h1 style={{ color: this.props.color}}>Title</h1>
                    <Navbar></Navbar>
                </header>  
                
            </div>
        );
    }
}

export default Header;