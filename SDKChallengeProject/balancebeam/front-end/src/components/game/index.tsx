import React from "react";
import { initGame } from "./main";
import "./index.css";

class Game extends React.Component {
    componentDidMount() {
        initGame();

    }

    render() {
        return (
            <div className="col s7 log-container" id="log">
                <div className="game-container">
                    <div id="game" className="game"></div>
                </div>
            </div>
        );
    }
}

export default Game;
