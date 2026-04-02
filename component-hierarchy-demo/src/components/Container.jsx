import UserCard from "./UserCard";

function Container(props) {
  return (
    <div className="container">
      <h2>Test User List</h2>

      {props.users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          role={user.role}
          department={user.department}
        />
      ))}
    </div>
  );
}

export default Container;