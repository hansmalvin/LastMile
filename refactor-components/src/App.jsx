// Step 1: Import React & Components
import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "sleeping" },
    { id: 2, name: "playing" },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const newItem = {
      id: Date.now(), 
      name: "New Item",
    };
    setItems([...items, newItem]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header onAdd={handleAdd} />
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;