import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // React Router setup
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { Link } from "react-router-dom"; // Import Link component
import tasksData from "./data/tasks.json"; // import json file
import ItemDetails from "./pages/ItemDetails";
import "./App.css";

function App() {
  const [myTasks, setMyTasks] = useState(tasksData); //Initialize state with data from the JSON file by using tasksData
  const [task, setTask] = useState(""); // Added state for the task input field to prevent error


  const addTask = (e) => {
    e.preventDefault(); 

    if (!task.trim()) return; 

// 11-04 new block of code that generates a new unique ID by finding the highest current ID and adding 1.
// If there are no tasks yet, it starts with ID 1.
const newId = myTasks.length > 0
? Math.max(...myTasks.map(t => t.id)) + 1
: 1;

    const newTask = {
      id: newId, // 11-04 something new, this was previously myTasks.length + 1, 
      task: task, 
      completed: false, 
      details: "",
    };

    setMyTasks([...myTasks, newTask]); // ✅ Updates state with new task
    setTask(""); // ✅ Clears input field
  };

  // delete task based on ID
  const deleteTask = (taskId) => {
    // function deletes a task based on its unique id
    const updatedTasks = myTasks.filter((task) => task.id !== taskId); // creates a new list of tasks by removing the task with the matching id
    setMyTasks(updatedTasks); // display new list of tasks without the removed task
  };

  const toggleTaskCompletion = (taskId) => {
    setMyTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed } // Toggle only the task that matches
          : task
      )
    );
  };
  

  // layout and route
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="main-content">
        {" "}
        {/*ensures there is space for content*/}
        <Routes>
          {/* Route for Dashboard */}
          <Route
            path="/"
            element={
              <Dashboard
                tasks={myTasks}
                setTasks={setMyTasks} 
                deleteTask={deleteTask}
                addTask={addTask}
                task={task}
                setTask={setTask}
                toggleTaskCompletion={toggleTaskCompletion} // ✅ Pass the function
              />
            }
          />
          /*<Route
            path="/home"
            element={
              <Dashboard
                tasks={myTasks}
                setTasks={setMyTasks} 
                deleteTask={deleteTask}
                addTask={addTask}
                task={task}
                setTask={setTask}
                toggleTaskCompletion={toggleTaskCompletion} // ✅ Pass the function
              />
            }
          />
          {/* Route for About */}
          <Route path="/about" element={<About />} />
          {/* Route for NotFound */}
          <Route path="*" element={<NotFound />} />
              {/* Route for ItemDetails */}
          <Route
  path="/task/:id"
  element={<ItemDetails tasks={myTasks} />}
/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
