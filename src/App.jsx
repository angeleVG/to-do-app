import { useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import TaskData from './data/tasks.json'
import './App.css'

function App() {


  

  return (
    <>
    <NavBar />
    <SideBar />
    <TaskList />
    <button>Add</button>
    <button>Remove</button>
    <Footer />
  </>
  )
}

export default App
