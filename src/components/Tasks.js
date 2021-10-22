import Task from "./Task"


const Tasks= ({tasks,ondelete, ontoggle})=>{

    

  
    return(
      
        <>
        {tasks.map((task)=>(
       <Task key={task.id} task={task} deleteTask={ondelete} ontoggle={ontoggle}/>
        )
        )}
        </>
    )
}

export default Tasks