function ItemCard({ item, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <span>{item.name}</span>
      <button
        onClick={() => onDelete(item.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default ItemCard;