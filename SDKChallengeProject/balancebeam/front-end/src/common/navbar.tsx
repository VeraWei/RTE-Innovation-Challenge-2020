import React from "react";
import "../assets/styles.css";

class Navbar extends React.Component {

    render() {

    return (
        <div className="navbar-fixed">
            <nav className="agora-navbar">
                <div className="nav-wrapper agora-primary-bg valign-wrapper">
                    <h5 className="left-align">RTM Tutorial</h5>
                    <a
                        href="https://github.com/AgoraIO/RTM/tree/master/Agora-RTM-Tutorial-Web"
                        className="aperture"
                    >
                        <span className="github"></span>
                    </a>
                </div>
            </nav>
        </div>
    );
    }
}

export default Navbar;
