import React from "react";
import "../../assets/styles.css";

class LoginForm extends React.Component {
    render() {
        return (
            <form id="loginForm">
                <div className="col" style={{ minWidth: 433, maxWidth: 433 }}>
                    <div
                        className="card"
                        style={{ marginTop: 0, marginBottom: 0 }}
                    >
                        <div
                            className="row card-content"
                            style={{ marginTop: 10, marginBottom: 0 }}
                        >
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="App ID"
                                    name="appId"
                                    value="c7511bc67c6147f4aca0b8cb68e47cb0"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="account name"
                                    name="accountName"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="token"
                                    name="token"
                                />
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button
                                        className="btn btn-raised btn-primary waves-effect waves-light"
                                        id="login"
                                    >
                                        LOGIN
                                    </button>
                                    <button
                                        className="btn btn-raised btn-primary waves-effect waves-light"
                                        id="logout"
                                    >
                                        LOGOUT
                                    </button>
                                </div>
                            </div>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="channel name"
                                    name="channelName"
                                />
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button
                                        className="btn btn-raised btn-primary waves-effect waves-light"
                                        id="join"
                                    >
                                        JOIN
                                    </button>
                                    <button
                                        className="btn btn-raised btn-primary waves-effect waves-light"
                                        id="leave"
                                    >
                                        LEAVE
                                    </button>
                                </div>
                            </div>
                            <div className="input-field channel-padding">
                                <input
                                    type="text"
                                    placeholder="channel message"
                                    name="channelMessage"
                                />
                                <button
                                    className="btn btn-raised btn-primary waves-effect waves-light custom-btn-pin"
                                    id="send_channel_message"
                                >
                                    SEND
                                </button>
                            </div>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="peer id"
                                    name="peerId"
                                />
                            </div>
                            <div className="input-field channel-padding">
                                <input
                                    type="text"
                                    placeholder="peer message"
                                    name="peerMessage"
                                />
                                <button
                                    className="btn btn-raised btn-primary waves-effect waves-light custom-btn-pin"
                                    id="send_peer_message"
                                >
                                    SEND
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginForm;
