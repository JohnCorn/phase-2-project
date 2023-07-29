import React, { useState } from 'react'
import {motion} from 'framer-motion';

function AddItem({addItem}) 
{
  const defaultDueDate = "Today"
  const defaultDescription = ""
  const defaultPriority = "Low"

  const[dueDate, setDueDate]=useState(defaultDueDate)
  const[description, setDescription]=useState(defaultDescription)
  const[priority, setPriority]=useState(defaultPriority)

  function handleSubmit(e)
  {
    e.preventDefault();
    console.log("onSubmit", e.target.value)


  const newItem =
    {
      "description": description,  
      "dueDate": dueDate,
      "priority": priority   
    }

    addItem(newItem)
  }

  return (    
    <motion.div className='flex justify-center items-center mt-5'>
      <form onSubmit={(e) => handleSubmit(e)} className='grid grid-flow-row'>
        <div className='bg-blue-500 rounded-md grid grid-flow-col p-8 gap-2'>

          <div>
            <select
              value={dueDate}
              onChange={(e)=>setDueDate(e.target.value)}>      
              <option default value="Today">Today</option>
              <option value="Tommorrow">Tommorrow</option>
              <option value="Later">Later</option>
            </select>
          </div>
    
          <select
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}>
            <option default value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
            
          <input 
            type="text" 
            name="name"
            placeholder='Write Description'
            onChange={(e) =>setDescription(e.target.value)} 
          />

        </div>

        <motion.input 
          type="submit" 
          value="Submit" 
          whileHover={{ 
            scale: 1.25, 
            background: "white",
            boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.25)",

        }}
        whileTap={{ 
            scale: 0.75,

        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className='bg-yellow-500 rounded-md mx-auto px-2 mt-2'
        />

      </form>      
    </motion.div>
  )
}

export default AddItem