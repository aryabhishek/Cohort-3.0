"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("Client connected");
    socket.send("Hello from the server!");
});
wss.on("close", () => {
    console.log("Client disconnected");
});
wss.on("error", (error) => {
    console.log("An error occurred: ", error);
});
