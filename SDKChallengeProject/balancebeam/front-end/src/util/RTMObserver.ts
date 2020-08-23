import RtmClient from "./rtm-client";

import { log, error } from './logger';

export interface ClientInitParams {
  player: string;
}

export default class RTMObserver {

  _player: string = '';

  _logined: boolean = false;

  _channelName: string = '';

  rtm = new RtmClient();

  constructor(initParams: ClientInitParams) {
    this.initialize(initParams);
  }

  private initialize(initParams: ClientInitParams) {
    this._player = initParams.player;

    const rtm = this.rtm;
    rtm.on("ConnectionStateChanged", (newState, reason) => {
      log("ConnectionStateChanged", newState, reason);
    });
  
    rtm.on("MemberJoined", ({ channelName, args }) => {
      const memberId = args[0];
      log(`channel ${channelName} member: ${memberId} joined`);
    });
  
    rtm.on("MemberLeft", ({ channelName, args }) => {
      const memberId = args[0];
      log(`channel ${channelName} member: ${memberId} left`);
    });

    rtm.on("ChannelMessage", async ({ channelName, args }) => {
      const [message, memberId] = args;
      if (message.messageType === "IMAGE") {
        // 暂无
      } else {
        log('ChannelMessage', channelName, args);
      }
    });
  }

  async login () {
    if (this._logined) {
      alert("You already logined");
      return;
    }

    // TODO: params interface
    // const params: any = serializeFormData("loginForm");

    // if (!validator(params, ["appId", "accountName"])) {
    //   return;
    // }

    const params: any = {};
    try {
      this.rtm.init(params.appId);
      const result = await this.rtm.login(params.accountName, params.token);
      log('login', result);
      this._logined = true;
    } catch (err) {
      alert("Login failed, please open console see more details");
      error(err);
    }
  }

  joinChannel() {
    // TODO:
    this._channelName = 'xxx';
  }
}