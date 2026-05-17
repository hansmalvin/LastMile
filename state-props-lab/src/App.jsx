import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import Display from './Display';

function App() {
  const [sharedCount, setSharedCount] = useState(0);

  const handleCountChange = (newCount) => {
    setSharedCount(newCount);
  };

  return (
    <div>
      <h1>State and Props Lab Demo</h1>
      
      <Greeting name="Budi" />
      <Greeting name="Yanti" />
      
      <Counter label="My Shared Counter" onCountChange={handleCountChange} />
      <Display value={sharedCount} />
    </div>
  );
}

export default App;