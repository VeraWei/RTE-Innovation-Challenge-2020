import React from "react";
import "./index.css";

class Content extends React.Component {
    render() {
        return (
            <div className="col s7 log-container" id="log">
                <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                    <div className="grid-item">7</div>
                    <div className="grid-item">8</div>
                    <div className="grid-item">9</div>
                    <div id="targetA" className="target"></div>
                </div>
            </div>
        );
    }
}

export default Content;
