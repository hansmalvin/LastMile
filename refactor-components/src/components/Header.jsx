function Header({ onAdd }) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <h1>Refactor Demo Components</h1>
      <button onClick={onAdd}>Add Item</button>
    </div>
  );
}

export default Header;