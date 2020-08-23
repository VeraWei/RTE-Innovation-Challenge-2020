import React from 'react';
import "../../assets/styles.css";
import LoginForm from '../login';
import Game from '../game';
import Content from '../content';

class MainComponent extends React.Component {
    render() {
        return (
            <div className="row col l12 s12">
                <div className="row container col l12 s12 main-container">
                    <LoginForm />
                    <Game />
                    <Content />
                </div>
            </div>
        );
    }
}

export default MainComponent;
