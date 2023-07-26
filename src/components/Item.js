import React, {useState} from 'react'
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import {motion} from 'framer-motion';

function Item ({itemData, removeItem}) 
{
    const [complete, setComplete] = useState(false);

    const date =  new Date(itemData.dueDate)

    const monthName = date.toLocaleDateString("en-US", {
        month: "short",
    })

    const dayNumeric= date.toLocaleDateString("en-US", {
        day: "numeric"
    })

    const formattedTime = (date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",}))

    const weekDay = (date.toLocaleDateString("en-US", { 
        weekday: 'long'}))

    function OnComplete(latest) 
    {
        if (latest.scale === 0)
            removeItem(itemData.id)
    }

  return (
    <div className='flex justify-center items-center'>     
        <motion.div
            animate={{ 
                scale: complete ? 0 : 1, 
            }}
            transition={{ 
                delay: 0.125, 
                duration: 0.2,
                ease: "backIn" 
            }}
            onAnimationComplete={OnComplete}
        >
            <div 
            className='transition-transform duration-200  w-80 shadow-md shadow-black/30 px-4 py-1 h-20 rounded-2xl bg-lime-500 grid grid-flow-col text-green-800'>
                <div className='grid grid-flow-col my-auto'>
                    <div className='h-flex w-15'>
                        <h1 className='text-xs'>{weekDay}</h1>
                        <h1 className='text-sm font-semibold'>{`${monthName} ${dayNumeric}`}</h1>
                        <h1 className='text-sm font-bold'>{formattedTime}</h1>      
                    </div>        
                </div>

                <div className='my-auto w-15'>
                    <h1 className='text-xl font-bold'>Clean</h1>
                    <h1 className='h-flex w-full text-md font-semibold'>{itemData.description}</h1>
                </div>

                <div className='relative'>
                    <motion.button 
                        onClick={() => setComplete(true)}
                        whileHover={{ scale: 1.33 }}
                        whileTap={{ scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className='absolute right-0 top-0 bottom-0 text-lime-200'
                    >
                        {complete ? <BsCheckCircleFill size={35}/> : <BsCheckCircle size={35}/>}
                    </motion.button>
                </div>
            </div>
        </motion.div>

    </div>
  )
}

export default Item