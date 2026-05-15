function DataList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p style={{ textAlign: "justify", fontSize: "1.1rem",   lineHeight: "1.7",    color: "#999595" }}>
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default DataList;