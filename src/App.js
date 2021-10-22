import './App.css';
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';





function App() {

  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks]=useState([
    {
      "text": "Repairing Bike ",
      "day": "2nd feb at 6:00pm",
      "reminder": true,
      "id": 1
    },
    {
      "text": "Pick Ali",
      "day": "2nd feb 3:10pm",
      "reminder": true,
      "id": 2
    },
    {
      "text": "Shopping",
      "day": "2nd feb at 7:00pm",
      "reminder": true,
      "id": 3
    },
    {
      "text": "Meeting at School",
      "day": "2nd feb at 10:00am",
      "reminder": true,
      "id": 4
    },
    {
      "text": "Job Interview",
      "day": "11 Oct at 10:00am",
      "reminder": false,
      "id": 5
    }
  ])
// AddTask //
const addTask=(task)=>{
  const id=Math.floor(Math.random() * 10000) +1
  // console.log(id)
  const  newTask={id, ...task}
  setTasks([...tasks, newTask])

}

  // OnDelete //
  const deleteTask=(id) =>{
    
  setTasks(tasks.filter((task)=>task.id !==id))
  
  }
  

  // onToggle //
  const onToggle=(id)=>(
    setTasks(
      tasks.map(
        (task)=>task.id===id ?{...task, reminder:!task.reminder}:task)
    )
  )
  
  return (
    <div className="container">
      <Header ONAdd={()=>setShowAddTask(!showAddTask)} showTask={showAddTask}/>
      {/* {(showAddTask) ? '' : <AddTasks onAdd={addTask}/>} */}
      {/* OR */}
      {(!showAddTask) && <AddTasks onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks  tasks={tasks} ondelete={deleteTask} ontoggle={onToggle} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
