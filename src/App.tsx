import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<unknown>({});
  const [comments, setComments] = useState<unknown>({});
  const getPosts = async () => {
    const res = await fetch("http://localhost:3000/posts");
    setPosts(await res.json());
  };

  const getComments = async () => {
    const res = await fetch("http://localhost:3000/comments");
    setComments(await res.json());
  };

  return (
    <>
      <button className="counter" onClick={getPosts}>
        sw
        {JSON.stringify(posts)}
      </button>
      <button className="counter" onClick={getComments}>
        sw free
        {JSON.stringify(comments)}
      </button>
    </>
  );
}

export default App;
