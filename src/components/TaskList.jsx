import { useState } from "react";
function TaskList({ tasks, deleteTask, toggleTaskCompletion, editTask }) {

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // editing the current task
  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditedText(task.task);
  };

  // initialize variable to save edited task
  const handleSaveEdit = (id) => {
    editTask(id, editedText);
    setEditingTaskId(null);
  };

  return (
    <main className="main-list">
      
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
       {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {task.task}
                <div className="button-container">
                <button onClick={() => handleEditClick(task)}>Edit</button>
                <img src="/icons/edit.png" alt="Edit" className="icon" />
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <img src="/icons/trash.png" alt="Delete" className="icon" />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}   
export default TaskList;
