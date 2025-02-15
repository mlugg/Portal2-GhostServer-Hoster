import path from "path";
const addon = require(path.join(__dirname, "..", "addon"));

export class Client {
    id: number;
    name: string;
}

export const list: () => Client[] = addon.list;

export const startServer: (port: number) => string = addon.startServer;
export const exit: () => string = addon.exit;

export const startCountdown: (preCommands: string, postCommands: string, duration: number) => undefined = addon.startCountdown;

export const disconnect: (name: string) => undefined = addon.disconnect;
export const disconnectId: (id: number) => undefined = addon.disconnectId;

export const ban: (name: string) => undefined = addon.ban;
export const banId: (id: number) => undefined = addon.banId;