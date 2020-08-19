import React from "react";

import Navbar from "./common/navbar";
import Sidebar from "./common/sidebar";
import Game from "./components/game";
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
                {/* <Game /> */}
            </div>
        );
    }
}

export default App;
