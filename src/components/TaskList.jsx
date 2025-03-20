function TaskList({ tasks }) {
    return (
      <main className="main-list">
        <h1>Task List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task} {task.isCompleted ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      </main>
    );
  }
  
  export default TaskList;
  