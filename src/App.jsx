import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center flex flex-col items-center">
      <img src={viteLogo} className="h-16 w-16 mb-6 mt-8" alt="Vite logo" />
      <h1 className="text-white text-xl mb-2 font-bold">Emergency Company</h1>
      <p className="read-the-docs">Coming soon...</p>
      <a className="read-the-docs" href="mailto:team@emergency.company">team@emergency.company</p>
    </div>
  );
}

export default App;
