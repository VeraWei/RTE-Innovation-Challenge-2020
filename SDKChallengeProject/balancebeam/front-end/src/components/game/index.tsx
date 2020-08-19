import React from "react";
import {initGame} from './main';
import "./index.css";

class Game extends React.Component {

    componentDidMount() {
        initGame();
    }

    render() {

    return (
        <div className="game-container">
            <div id="game" className="game"></div>
        </div>
    );
    }
}

export default Game;
