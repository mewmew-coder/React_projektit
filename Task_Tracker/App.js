import {useState} from "react"
import React from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  { 
    id: 1,
    text: 'koodaus',
    day: 'Feb 2nd',
    reminder: false,
  },
  {
    id: 2,
    text: 'treeni',
    day: 'Feb 3rd',
    reminder: false,
  },
  {
    id: 3,
    text: 'take care of baby',
    day: 'Everyday',
    reminder: true,
  },
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 5000) + 1
  console.log(id)

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: ! task.reminder } : task))
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
      : ("No Tasks")}      
    </div>
  );
}

export default App;
