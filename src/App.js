import './App.css';
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa"





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

  // Fetch Task from db.json //
  const fetchTask=async(id)=>{ 
    const res =await fetch(`http://localhost:5000/tasks/${id}`)
      const data= await res.json()
      return data
        }


// AddTask //
const addTask= async (task)=>{
 
  const res = await fetch(`http://localhost:5000/tasks`,
  {
    method: 'POST',
    // add Header to specify type of content //
    headers: {
      'Content-type': 'application/json'
    },
    // convert getting data from input convert object into json because we are sending data to db.json //
    'body': JSON.stringify(task)
  })
  const data= await res.json()
  setTasks([...tasks, data])
}

  // OnDelete //
  const deleteTask= async(id) =>{
   await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
  setTasks(tasks.filter((task)=>task.id !==id))
  
  }
  

  // onToggle //
  const onToggle= async(id)=>{
    const taskToToggle= await fetchTask(id)
    const updatdeTask= { ...taskToToggle, 
    reminder: !taskToToggle.reminder}


    const res= await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatdeTask)
    })
    const data= await res.json()
    

    setTasks(
      tasks.map(
        (task)=>task.id===id ?{...task, reminder:data.reminder}:task)
    )
  }
  
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
