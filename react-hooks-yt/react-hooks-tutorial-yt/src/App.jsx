import "./App.css";
import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from "react";
import ShincodeContext from "./main.jsx";
import SomeChild from "./SomeChild";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decriment":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShincodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  let handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
    // setCount(count + 1);
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  // useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while (i < 2000000000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // }

  // useCallBack
  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert("これは重い処理です。")
  // }

  const showCount = useCallback(() => {
    alert("これは重い処理です。");
  }, [counter]);

  const square = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return count02 * count02;
  }, [count02])

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

      <hr />
      <h1>useReducer</h1>
      <p>カウント: {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decriment" })}>-</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント1 : {count01}</div>
      <div>カウント1 : {count02}</div>
      <div>結果 : {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count01 + 1)}>+</button>

      <hr />
      <h1>useCallBack</h1>
      <SomeChild showCount={showCount} />
    </div>
  );
}

export default App;
