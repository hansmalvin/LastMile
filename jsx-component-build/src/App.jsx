import Welcome from "./Welcome";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <Welcome />
      <UserCard name="Dharam" email="dharam@gmail.com" />
      <UserCard name="Rahul" email="rahul@gmail.com" />
    </div>
    
  );
}

export default App;