import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
    // setCount(count + 1);
  }, [count])

  return (
    <div className="App">
      <h1>UseState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
