import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Test");
  const [message, setMessage] = useState("Start clicking!");

  useEffect(() => {
    console.log("Run App");
  }, []);

  useEffect(() => {
    console.log(`Total: ${count}`);
    
    document.title = `Clicked ${count} times`;

    if (count >= 5) {
      setMessage("Keep Going");
    } else if (count === 0) {
      setMessage("Mulai Click");
    }
  }, [count]);


  const increment = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const testUbahNama = () => {
    if (name == "Test"){
      setName("Budi");
    } else{
      setName("Test")
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>React Hooks Demo Website Demo</h1>

      <h2>Halo, {name}</h2>
      <h3>{message}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Counter: {count}
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={increment} style={{ marginRight: "10px" }}>
          Add Click Count
        </button>

        <button 
          onClick={resetCount} 
          style={{ marginRight: "10px", cursor: "pointer" }}
        >
          Reset Count
        </button>

        <button onClick={testUbahNama}>
          Ganti Nama
        </button>
      </div>
    </div>
  );
}

export default App;