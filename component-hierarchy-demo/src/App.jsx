import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  const users = [
    { name: "Hans", role: "Informatics Intern", department: "Engineering" },
    { name: "Budi", role: "Data Analyst", department: "Analytics" },
    { name: "Siti", role: "Senior Programmer", department: "IT" }
  ];

  return (
    <div>
      <Header title="Testing Component Hierarchy Demo" />

      <Container users={users} />
    </div>
  );
}

export default App;