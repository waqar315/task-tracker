import './App.css';
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';





function App() {

  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks]=useState([])

  useEffect(()=>{
   const getTasks= async ()=>{
     const tasksFromServer= await fetchTasks()
     setTasks(tasksFromServer)
   }
    getTasks()
  }, [])

  // Fetch Tasks from db.json //
  const fetchTasks=async()=>{ 
    const res =await fetch('http://localhost:5000/tasks')
      const data= await res.json()
      return data
        }



// AddTask //
const addTask=(task)=>{
  const id=Math.floor(Math.random() * 10000) +1
  // console.log(id)
  const  newTask={id, ...task}
  setTasks([...tasks, newTask])

}

  // OnDelete //
  const deleteTask= async(id) =>{
   await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
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
