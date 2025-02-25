"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    function handleOnClick() {
        if (!socket) {
            return;
        }
        socket.send("Pong");
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (event) => {
            alert(event.data);
        };
    }, []);
    return (<>
      <div>
        <input type="text"/>
        <button onClick={handleOnClick}>Send</button>
      </div>
    </>);
}
exports.default = App;
