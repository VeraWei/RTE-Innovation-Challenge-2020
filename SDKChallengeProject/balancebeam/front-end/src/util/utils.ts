import { PromiseResolver } from "./types";

const noop = () => {};

export function uuid(prefix: string = 'null'): string {
  return prefix + '-' + Date.now();
}

export function generatePromiseResolver<T = any>(id: string): PromiseResolver<T> {
  let resolve: (value?: any) => void = noop;
  let reject: (reason?: any) => void = noop;
  return {
    resolve,
    reject,
    promise: new Promise((resolveFn, rejectFn) => {
      resolve = resolveFn;
      reject = rejectFn;
    }),
  }
}