function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <main className="main-list">
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.task}
            <button onClick={() => deleteTask(task.id)}>x</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default TaskList;
