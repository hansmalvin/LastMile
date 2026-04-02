function UserCard(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <p>{props.department}</p>
    </div>
  );
}

export default UserCard;