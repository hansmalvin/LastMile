import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  // Fetch data
  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, course }),
    });

    setName("");
    setCourse("");
    fetchStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;