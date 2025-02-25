import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    socket.on("message", (data) => {
        if (data.toString() === "ping") {
            socket.send("pong");
        }
    })
});

wss.on("close", () => {
    console.log("Client disconnected");
});

wss.on("error", (error) => {
    console.log("An error occurred: ", error);
});