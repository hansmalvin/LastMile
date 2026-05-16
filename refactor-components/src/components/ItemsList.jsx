import ItemCard from "./ItemsCard";

function ItemList({ items, onDelete }) {
  if (items.length === 0) {
    return <p>No Data</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ItemList;