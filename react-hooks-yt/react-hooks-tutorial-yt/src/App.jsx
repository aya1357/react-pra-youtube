import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>UseState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
