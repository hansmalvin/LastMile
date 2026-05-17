import React, { useState } from 'react';

function Counter({ label, onCountChange }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    onCountChange(count + 1); 
  };

  const decrement = () => {
    setCount(count - 1);
    onCountChange(count - 1); 
  };

  return (
    <div>
      <h3>{label}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;