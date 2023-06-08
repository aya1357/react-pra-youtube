import "./App.css";
import { useEffect, useState, useContext, useRef } from "react";
import ShincodeContext from "./main.jsx";

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShincodeContext);
  const ref = useRef();

  let handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
    // setCount(count + 1);
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value)
    console.log(ref.current.offsetHeight)
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>
    </div>
  );
}

export default App;
