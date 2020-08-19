import React from "react";
import "../assets/styles.css";

class Navbar extends React.Component {

    render() {

    return (
        <div className="navbar-fixed">
            <nav className="agora-navbar">
                <div className="nav-wrapper agora-primary-bg valign-wrapper">
                    <h5 className="left-align">RTM Online Game</h5>
                    <a
                        href="https://github.com/VeraWei/RTE-Innovation-Challenge-2020/tree/master/SDKChallengeProject/balancebeam"
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
