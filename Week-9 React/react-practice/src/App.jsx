import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useState, useRef, createContext, useContext } from "react";

const BulbContext = createContext();
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Timer() {
  const [currentCount, setCurrentCount] = useState(1);
  let timer = useRef();

  function startTimer() {
    timer.current = setInterval(() => {
      setCurrentCount((count) => count + 1);
    }, 1000);

  }

  function stopTimer() {
    clearInterval(timer.current);
  }

  return (
    <>
      <h1>Timer</h1>
      <h2>{currentCount}</h2>
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about"> About</Link>
    </nav>
  );
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Timer></Timer>
      <LightBulb/>
    </>
  );
}

function About() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 2000);
  return <h1>About</h1>;
}

function LightBulb() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: isOn ? "yellow" : "black",
      }}
      onClick={() => setIsOn((isOn) => !isOn)}
    ></div>
  );
}

export default App;
