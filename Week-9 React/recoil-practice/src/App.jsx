import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return <ComponentThatUsesRecoil />;
}

function ComponentThatUsesRecoil() {
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <div>
      <button onClick={() => setNotificationCount((count) => count + 1)}>
        Increment: {notificationCount}
      </button>
    </div>
  );
}
export default App;
