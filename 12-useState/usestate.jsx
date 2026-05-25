// 12 - useState 🔄
import { useState } from "react";

//  Counter - number state
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>
    </div>
  );
}

//  Toggle - boolean state
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Status: {isOn ? "🟢 ON" : "🔴 OFF"}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

//  Input - string state
function InputState() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "stranger"} 👋</p>
    </div>
  );
}

//  App
function App() {
  return (
    <div>
      <Counter />
      <Toggle />
      <InputState />
    </div>
  );
}

export default App;
