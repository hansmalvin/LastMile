import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!text) return;
    await axios.post('http://localhost:5000/tasks/add', {
      description: text
    });
    setText('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>MERN Task Manager</h1>

      <input
        type="text"
        placeholder="Add task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <TaskList tasks={tasks} deleteTask={deleteTask} />

    </div>
  );
}

export default App;
