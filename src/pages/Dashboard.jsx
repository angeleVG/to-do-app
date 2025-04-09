import TaskList from "../components/TaskList";

function Dashboard({ tasks, setTasks, deleteTask, addTask, task, setTask, toggleTaskCompletion }) {

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, task: newText } : task));
  };

  return (
    <div>
    <h1>Things to do</h1>
    {/* Form to add a new task */}
    <form className="add-task-form" onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Updates the state with the current task input
          placeholder="Enter a task"
          required // Prevents adding empty tasks
        />
        <button type="submit">Add Task</button>
      </form>
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleTaskCompletion={toggleTaskCompletion} // Pass the toggle function
        editTask={editTask}
      />

      
    </div>
  );
}

export default Dashboard;
