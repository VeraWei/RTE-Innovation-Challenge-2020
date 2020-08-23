import React from "react";
import "./index.css";

class Content extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="col s7 log-container" id="log"></div>
            </div>
        );
    }
}

export default Content;
