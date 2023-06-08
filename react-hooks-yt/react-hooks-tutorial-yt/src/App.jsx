import "./App.css";
import { useEffect, useState, useContext } from "react";
import ShincodeContext from "./main.jsx";

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShincodeContext);

  let handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
    // setCount(count + 1);
  }, [count])

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>
    </div>
  );
}

export default App;
