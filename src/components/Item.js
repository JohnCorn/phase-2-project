import React, {useState} from 'react'
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

function Item ({itemData}) 
{
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

  return (
    <div className='flex justify-center items-center'>
        <div className='group transition-transform duration-200 hover:scale-105 w-80 shadow-md shadow-black/30 px-4 py-1 h-20 rounded-2xl bg-lime-500 hover:bg-lime-300 grid grid-flow-col text-green-800'>

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
                <button className='absolute right-0 top-0 bottom-0'>
                    <BsCheckCircle
                    className='text-lime-200 transition-transform duration-200 group-hover:text-green-800 group-hover:scale-110'
                    size={35}/>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Item