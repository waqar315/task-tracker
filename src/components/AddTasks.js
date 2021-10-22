import { useState } from "react"

const AddTasks=({onAdd})=>{
    const [text, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)

    const onsubmit=(e)=>{
        e.preventDefault()
        console.log('PREVENT DEFAULT CALLED')

        if(!text){
            alert('Please enter the text value')
            return
        }

        onAdd({text, reminder, day})
        // after the submit cleare inputs //
        setText('')
        setDay('')
        setReminder(false)
    }
    return(
        
            <form className='add-form' onSubmit={onsubmit}>
                <div className='form-control'>
                <label>Add Task</label>
                <input type='text'  placeholder='Enter task'  
                value={text} 
                onChange={(e) =>setText(e.target.value)}/>
                </div>

                <div className='form-control'>
                <label>Add Day & Time</label>
                <input type='text' placeholder='Enter day & time'
                 value={day} 
                 onChange={(e) =>setDay(e.target.value)} />
                </div>

                <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked={reminder}
                 value={reminder} 
                 onChange={(e) =>setReminder(e.currentTarget.checked)} />
                </div>
                <input type='submit' value='Save Task' className='btn btn-block'/>

            </form>
        
    )
}

export default AddTasks