function TaskList({ tasks, deleteTask }) { {/*added deleteTask as a prop*/}
    return (
      <main className="main-list">
        <h1>To-Do List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task} {task.isCompleted ? "✅" : "❌"}
              <button onClick={() => deleteTask(task.id)}>x</button> {/* when button is clicked, the deleteTask function is triggered with the task's id*/}
            </li>
          ))}
        </ul>
      </main>
    );
  }
  
  export default TaskList;
  