export interface GamePlayerOnlineMessage {
  id: string;
  player: string;
  online: boolean;
}

export interface GameActionMessage {
  id: string;
  player: string;
  action: string;
  args?: any;
}

export interface GameActionResponseMessage {
  id: string;
  actionId: string;
  success: boolean;
  reason?: any;
}

export type GameActionListener = (payload: GameActionMessage) => void;

export interface PromiseResolver<T> {
  promise: Promise<T>;
  resolve: (value?: T) => void;
  reject: (reason?: any) => void;
}