import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter((count) => count + 1);
  };

  const decreaseCounter = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
}

export default App;
