import TaskList from "../components/TaskList";

function Dashboard({ tasks, deleteTask, addTask, task, setTask }) {
  return (
    <div>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      {/* <button onClick={addTask}>Add</button> */}
      {/* <button onClick={deleteTask}>Remove</button> */}
      <form onSubmit={addTask}>
        <input 
        type="text"
        name="task" 
        value={task} // as seen in class instead of title we use task because of our JSON file
        onChange={ (e) => setTask(e.target.value) } // When the user types in the input, the task is updated with what was typed
        placeholder="Enter a new task" />
  <button type="submit">Add task</button>
</form>
    </div>
  );
}

export default Dashboard;
