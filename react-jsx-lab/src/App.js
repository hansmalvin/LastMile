import React from 'react';
import Item from './Item';

function App() {
  const name = "Hans";
  const items = ['Item Test 1', 'Item Test 2', 'Item Test 3'];

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React with JSX.</p>

      <h2>My Items:</h2>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
