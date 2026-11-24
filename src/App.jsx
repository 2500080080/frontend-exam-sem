import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>Calculator</h2>

      <input type="number" onChange={e => setA(e.target.value)} />
      <input type="number" onChange={e => setB(e.target.value)} />

      <button onClick={() => setResult(Number(a) + Number(b))}>+</button>
      <button onClick={() => setResult(Number(a) - Number(b))}>-</button>
      <button onClick={() => setResult(Number(a) * Number(b))}>×</button>
      <button onClick={() => setResult(Number(b) !== 0 ? Number(a) / Number(b) : "Cannot divide by zero")}>÷</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;