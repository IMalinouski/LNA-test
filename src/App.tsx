import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const doLNA = async () => {
    const res = await fetch("http://localhost:3000/posts");
    console.log(await res.json());
  };

  return (
    <>
      <button className="counter" onClick={doLNA}>
        Count is {count}
      </button>
    </>
  );
}

export default App;
