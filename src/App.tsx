import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<unknown>({});
  const doLNA = async () => {
    const res = await fetch("http://localhost:3000/posts");
    setData(await res.json());
  };

  return (
    <>
      <button className="counter" onClick={doLNA}>
        {JSON.stringify(data)}
      </button>
    </>
  );
}

export default App;
