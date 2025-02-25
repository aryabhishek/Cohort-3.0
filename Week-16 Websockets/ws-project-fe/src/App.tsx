import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  //@ts-ignore
  const inputRef = useRef();

  function handleOnClick() {
    if (!socket) {
      console.log("socket is null")
      return
    }
    console.log("reached here");
    //@ts-ignore
    socket.send(inputRef.current.value);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data);
    }

  }, [])

  return (
    <>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleOnClick}>Send</button>
      </div>
    </>
  )
}

export default App
