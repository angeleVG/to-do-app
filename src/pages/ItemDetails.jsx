import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemDetails({ tasks, setTasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));

  // this only pulls task.details from your state, which gets updated properly.
  // This prevents old localStorage data from showing up on new tasks that reuse previous IDs.
  const [details, setDetails] = useState(() => (task ? task.details : "")); 

  useEffect(() => {
    if (details) {
      localStorage.setItem(`task-${id}-details`, details);
    }
  }, [details, id]);

  const handleSaveDetails = () => {
    const updatedTask = { ...task, details }; 
    setTasks((prevTasks) => 
      prevTasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      )
    );
  };

  if (!task) return <p>No task found</p>;

  return (
      <div className="textarea-container">
      <h2>{task.task}</h2>
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)} // Update details state whilst typing
        placeholder="Add details..."
        rows={10}
        cols={40}
      />
      <button onClick={handleSaveDetails}>Save</button>
    </div>
  );
}

export default ItemDetails;
