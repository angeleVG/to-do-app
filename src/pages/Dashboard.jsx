import TaskList from "../components/TaskList";

function Dashboard({ tasks, deleteTask, addTask }) {
  return (
    <div>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <button onClick={addTask}>Add</button>
      <button onClick={deleteTask}>Remove</button>
      <form>
        <input type="text" name="example" placeholder="Enter something" />
  <button type="submit">Submit</button>
</form>
    </div>
  );
}

export default Dashboard;
