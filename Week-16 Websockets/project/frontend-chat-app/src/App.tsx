import { useEffect, useRef, useState } from "react"

function App() {
  const [messages, setMessages] = useState<Array<string>>([]);
  //@ts-ignore
  const wsRef = useRef<any>();
  //@ts-ignore
  const inputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(messages => [...messages, event.data]);
    }
    wsRef.current = ws;

    ws.onopen = (event) => {
      ws.send(JSON.stringify({
        "type": "join",
        "payload": {
          "roomId": "red"
        }
      }))
    }

    return () => {
      ws.close();
    }
  }, [])

  function handleSend() {
    wsRef.current.send(JSON.stringify({
      "type": "chat",
      "payload": {
        "roomId": "red",
        "message": inputRef.current.value
      }
    }));
    inputRef.current.value = "";
  }

  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center'>
      <div className="h-[90%] w-[85%] flex flex-col justify-between">
        <div className='bg-gray-500 h-[95vh] rounded-lg'>
          {messages.map((message, idx) => <div className="m-4 p-2">
            <span key={idx} className="bg-white text-black rounded-lg ml-4 p-2">{message}</span>
          </div>)}
        </div>
        <div className='bg-gray-300 h-[5vh] rounded-lg flex justify-start'>
          <input ref={inputRef} className="rounded-lg ml-4 px-4 mr-4 w-[90%] cursor-select border-2 border-solid border-black" type="text" onKeyDown={(event) => event.key == "Enter" && handleSend()} />
          <button className="cursor-pointer bg-blue-500 rounded-lg p-4 flex items-center" onClick={handleSend}>Send!</button>
        </div>
      </div>
    </div>
  )
}

export default App
