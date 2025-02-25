import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const allSockets: any[] = [];

// {socket: socketObj, "room": "red"}

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    //@ts-ignore
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type === "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
      socket.send("Joined the room");
    }

    if (parsedMessage.type === "chat") {
      const currentUserRoom = allSockets.find((obj) => {
        return obj.socket === socket;
      }).room;

      allSockets.forEach((obj) => {
        if (obj.room === currentUserRoom) {
          obj.socket.send(parsedMessage.payload.message);
        }
      });
    }
  });
});
