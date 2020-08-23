import EventEmitter from 'eventemitter3';

import { log, error } from './logger';

import { GameActionMessage, PromiseResolver, GameActionResponseMessage, GameActionListener } from "./types";
import { uuid, generatePromiseResolver } from "./utils";

import RTMObserver, { ClientInitParams } from './RTMObserver';

export default class GameClient extends RTMObserver {

  _actionResolvers: Record<string, PromiseResolver<boolean>> = {};

  _remoteActionEmitter = new EventEmitter<'action'>();

  constructor(params: ClientInitParams) {
    super(params);
    this.initializeClient(params);
  }

  private initializeClient(params: ClientInitParams) {
    this.rtm.on("MessageFromPeer", async (message, peerId) => {
      if (message.messageType === "IMAGE") {
        // 暂无图片逻辑
      } else {
        log('MessageFromPeer', message, peerId);
        // TODO: 校验 memberId
        if (message.actionId) {
          // send action response message
          const response = message as GameActionResponseMessage;
          response.success ?
            this._actionResolvers[response.actionId].resolve() :
            this._actionResolvers[response.actionId].reject(response.reason);
        } else {
          // 来自其它机器的动作执行请求（通过主机）
          const action = message as GameActionMessage;
          this._remoteActionEmitter.emit('action', action);
        }
      }
    });

    // TODO: 通知主机，Client 上线
  }

  listenToRemoteAction(callback: GameActionListener) {
    this._remoteActionEmitter.addListener('action', callback);
  }

  // 发出动作，等待主机通知是否可以执行，如果主机堆积的消息过，该动作应该超时取消
  async sendAction(action: string, args: any): Promise<boolean> {
    if (!this._logined) {
      alert('没登录');
      return false;
    }

    const message: GameActionMessage = {
      id: uuid('action'),
      player: this._player,
      action,
      args,
    }

    this.rtm.sendChannelMessage(
      message,
      this._channelName
    )  

    this._actionResolvers[message.id] = generatePromiseResolver<boolean>(message.id);

    return this._actionResolvers[message.id].promise;
  }
}
