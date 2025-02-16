import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Sidebar>
      <MainContent></MainContent>
    </div>
  );
}

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  if (!isSidebarOpen) {
    return (
      <div>
        <button onClick={() => setIsSidebarOpen(true)}>😁</button>
      </div>
    );
  }
  return (
    <div className="bg-green-700 text-white h-screen w-1/5 p-4">
      <button onClick={() => setIsSidebarOpen(false)}>😁</button>
      <h1 className="text-2xl font-bold">Sidebar</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div className="w-full">
      <TopBar></TopBar>
      <div className="bg-blue-200 h-48 w-full p-4 grid grid-cols-11 gap-4">
        <div className="bg-green-300 -translate-y-6 sm:col-span-2 shadow-lg rounded-2xl col-span-11 hidden sm:block"></div>
        <div className="bg-blue-400 sm:col-span-5 shadow-lg rounded-2xl col-span-11"></div>
        <div className="bg-red-300 sm:col-span-4 shadow-lg rounded-2xl col-span-11"></div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <nav className="bg-black text-white h-16 p-4 hidden sm:block">
      <h1 className="text-2xl font-bold">TopBar</h1>
    </nav>
  );
}

export default App;
