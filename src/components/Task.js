import {FaTimes} from "react-icons/fa"

const Task = ({task, deleteTask, ontoggle}) => {
    return (
        
            
             <div   className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>ontoggle(task.id)}>
                 <h3>{task.text} {<FaTimes style={{color:'red'}} onClick={()=>deleteTask(task.id)} />}
                 </h3>
                  <p>{task.day}</p>
                  <p className="edit">
                        {/* {<FaEdit style={{color:'green'}}  />} */}
                  </p>
              </div>
             
            
       

        
    )
}

export default Task