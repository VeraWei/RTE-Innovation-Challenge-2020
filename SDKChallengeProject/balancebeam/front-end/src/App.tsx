import React from "react";
import Navbar from "./common/navbar";
import MainComponent from "./components/main";
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
                <MainComponent />
            </div>
        );
    }
}

export default App;
