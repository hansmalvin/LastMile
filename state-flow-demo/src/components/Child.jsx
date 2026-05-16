import { useState } from "react";

export function ChildInput({ onUpdate }) {
  const [input, setInput] = useState("");
  
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>Input Component Demo</h3>
      <input
        type="text"
        placeholder="Type Message Here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onUpdate(input)}>Update</button>
    </div>
  );
}

export function ChildPreview({ message }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>Preview Component Demo</h3>
      <p>{message}</p>
    </div>
  );
}