import { useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import './App.css'

function App() {

  const [myTasks, setMyTasks] = useState([
    { id: 1, task: "Get Money", isCompleted: true },
    { id: 2, task: "Become Rich", isCompleted: true },
    { id: 3, task: "Buy a Yacht", isCompleted: false },
  ]);

const addTask = () => {
  const newTask = {id:"test new", task: "test task", isCompleted: false };
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
    <TaskList tasks={myTasks} deleteTask={deleteTask}/>
    <button onClick={addTask}>Add</button>
    <button onClick={deleteTask}>Remove</button>
    <Footer />
  </>
);
}



export default App
