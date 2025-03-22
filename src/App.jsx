import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // React Router setup
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import ItemDetails from "./pages/ItemDetails"; // new Item Details Page
import About from "./pages/About"; // new about page
import NotFound from "./pages/NotFound"; // new error page
import Dashboard from "./pages/Dashboard"; // Corrected path for Dashboard
import { Link } from "react-router-dom"; // Import Link component
import "./App.css";

function App() {
  const [myTasks, setMyTasks] = useState([
    { id: 1, task: "Get Money", isCompleted: true },
    { id: 2, task: "Become Rich", isCompleted: true },
    { id: 3, task: "Buy a Yacht", isCompleted: false },
  ]);

  const addTask = () => {
    const newTask = { id: "test new", task: "test task", isCompleted: false };
    const copyList = [...myTasks];
    copyList.push(newTask);
    setMyTasks(copyList);
  };

  const deleteTask = () => {
    const copyList = [...myTasks];
    copyList.pop();
    setMyTasks(copyList);
  };

  return (
    <>
    <NavBar />
    <SideBar />

    <Routes>
      {/* Route for Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* Route for TaskList */}
      <Route
        path="/tasks"
        element={
          <>
            <TaskList tasks={myTasks} deleteTask={deleteTask} />
            <button onClick={addTask}>Add</button>
            <button onClick={deleteTask}>Remove</button>
          </>
        }
      />

      {/* Route for ItemDetails */}
      <Route path="/task/:id" element={<ItemDetails />} />

      {/* Route for About */}
      <Route path="/about" element={<About />} />
      {/* Catch-all Route for NotFound */}
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </>
);
}

export default App;
