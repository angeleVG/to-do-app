import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemDetails({ tasks, setTasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));

  const [details, setDetails] = useState(() => task ? task.details : "");

  useEffect(() => {
    if (task) {
      setDetails(task.details || "");
    }
  }, [task]);

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
    <div className="item-details-page">
      <h2>{task.task}</h2>
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)} // Update details state whilst typing
        placeholder="Add details..."
        rows={10}
        cols={50}
      />
      <button onClick={handleSaveDetails}>Save</button>
    </div>
  );
}

export default ItemDetails;
