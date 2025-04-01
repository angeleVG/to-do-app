import TaskList from "../components/TaskList";

function Dashboard({ tasks, deleteTask, addTask, task, setTask, toggleTaskCompletion }) {
  return (
    <div>
    <h1>To-Do List</h1>
    {/* Form to add a new task */}
    <form onSubmit={addTask}>
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
      />

      
    </div>
  );
}

export default Dashboard;
