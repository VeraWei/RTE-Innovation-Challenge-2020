import React from "react";

import Navbar from "./common/navbar";
import Sidebar from "./common/sidebar";
import {initialization} from "./util/initialization";
import "./App.css";

class App extends React.Component {
    componentDidMount() {
        initialization();
    }

    render() {
        return (
            <div className="agora-theme">
                <Navbar />
                <Sidebar />
            </div>
        );
    }
}

export default App;
