import { useParams } from "react-router-dom";
import { useState } from "react";

function TaskDetails({ tasks }) {
    const { id } = useParams();
    const task = tasks.find((t) => t.id === parseInt(id));
    const [details, setDetails] = useState("");

    if (!task) return <p>No task found.</p>

    return (
        <div className="task-details-page">
          <h2>{task.task}</h2>
          <textarea
           value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Add more details..."
        rows={10}
        cols={40}
      />
    </div>
      );
    }

    export default ItemDetails