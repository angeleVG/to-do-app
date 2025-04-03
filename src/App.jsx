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
import "./App.css";

function App() {
  const [myTasks, setMyTasks] = useState(tasksData); //Initialize state with data from the JSON file by using tasksData
  const [task, setTask] = useState(""); // Added state for the task input field to prevent error

  /* previous data 
const [myTasks, setMyTasks] = useState([
  { id: 1, task: "Get Money", isCompleted: true },
  { id: 2, task: "Become Rich", isCompleted: true },
  { id: 3, task: "Buy a Yacht", isCompleted: false },
]); */

  /* previous add button 
  const addTask = () => {
    const newTask = { id: "test new", task: "test task", isCompleted: false };
    const copyList = [...myTasks];
    copyList.push(newTask);
    setMyTasks(copyList);
  }; */

  const addTask = (e) => {
    e.preventDefault(); 

    if (!task.trim()) return; 

    const newTask = {
      id: myTasks.length + 1, 
      task: task, 
      completed: false, 
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
        task.id === taskId ? { ...task, completed: !task.completed } : task
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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
