import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState(["Wireless Mouse", "Mechanical Keyboard"]);
  const [productInput, setProductInput] = useState("");

  const addProduct = () => {
    if (productInput.trim() === "") return; 

    setProducts([...products, productInput]);
    setProductInput("");
  };

  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>Product Dynamic list rendering</h2>

      <input
        type="text"
        placeholder="Add a new product..."
        value={productInput}
        onChange={(e) => setProductInput(e.target.value)}
      />
      <button onClick={addProduct} style={{ marginLeft: "5px" }}>
        Add Product
      </button>

      {products.length === 0 ? (
        <p>Inventory is empty. Add a product above.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {product}
              <button
                onClick={() => removeProduct(index)}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;