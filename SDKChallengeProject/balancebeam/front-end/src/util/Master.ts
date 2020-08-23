import EventEmitter from 'eventemitter3';

import { log, error } from './logger';

import { GameActionMessage, PromiseResolver, GameActionResponseMessage, GameActionListener, GamePlayerOnlineMessage } from "./types";
import { uuid, generatePromiseResolver } from "./utils";

import RTMObserver, { ClientInitParams } from './RTMObserver';

export default class GameMaster extends RTMObserver {

  _messageQueue: GameActionMessage[] = [];

  _players: string[] = [];

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
        if ('online' in message) {
          // client 上线消息
          this._players.push((message as GamePlayerOnlineMessage).player);
          return;
        }

        // 动作消息
        // 主机控制消息队列
        this._messageQueue.push(message);
        this.executeAction();
      }
    });
  }

  executeAction() {
    const message = this._messageQueue.shift();

    if (!message) {
      return;
    }

    // 发送执行通知
    this.sendActionResponse(message);

    // 同步给其它 client 发执行请求
    this._players.forEach(p => {
      if (p !== message.player) {
        this.sendActionSync(message, p);
      }
    })

    // 本机同时开始计算
    // TODO:

    // 得到结果
    // TODO:

    // 同步结果给所有 client
    // TODO:
  }

  private sendActionResponse(message: GameActionMessage) {
    const response: GameActionResponseMessage = {
      id: uuid('response'),
      actionId: message.id,
      success: true,
    }
    this.rtm.sendChannelMessage(
      response,
      this._channelName
    );
  }

  private sendActionSync(message: GameActionMessage, player: string) {
    this.rtm.sendChannelMessage(
      {
        ...message,
        id: uuid('action'),
        player,
      },
      this._channelName
    );
  }
}

