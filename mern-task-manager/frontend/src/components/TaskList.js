function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.description}
          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
