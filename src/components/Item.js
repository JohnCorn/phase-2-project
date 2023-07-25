import React, {useState} from 'react'
import { BsCheckCircle } from "react-icons/bs";

function Item ({itemData}) 
{
      function GetTimeDiff()
      {
        const startHour = new Date(itemData.endDate).getHours()
        const endHour = new Date(itemData.startDate).getHours()

        const startMin = new Date(itemData.endDate).getMinutes()
        const endMin= new Date(itemData.startDate).getMinutes()

        const minDiff = startMin - endMin;
        const hourDiff= startHour - endHour

        const timeString  = `${hourDiff}:${minDiff}`
        return(timeString);
      }
    

    function FormatTime(dateString)
    {
        const date1 = new Date(dateString);

        const currTime = date1.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })

          return currTime;
    } 

  return (
<div className='flex justify-center items-center'>
    <div className='w-1/3 rounded-2xl bg-red-500 grid grid-flow-row gap-10 text-white '>

    <div className='mx-4 my-2 grid grid-flow-row gap-5'>

        {/* Top Half */}
        <div className='grid grid-flow-col items-stretch'>
            <div className='w-3/4'>
                <h1>{itemData.description}</h1>
            </div>

        <div className='relative'>
            <button className='absolute top-0 right-0'>
                <BsCheckCircle
                    className='text-gray-900 hover:text-gray-200'
                    size={35}/>
            </button>
            </div>
        </div>

        {/* Bottom Half */}
        <div className='grid grid-flow-col items-stretch mb-2'>
            <div className=''>
                <h1 className='font-semibold'>{FormatTime(itemData.startDate)}</h1>
                <p className='text-xs font-semibold'>Start</p>
            </div>

            <div className='bg-white text-red-500 rounded-full text-center flex justify-center items-center my-2 mx-2'>
                <h1>{GetTimeDiff(itemData.startDate, itemData.endDate)}</h1>
            </div>

            <div className='text-right'>
                <h1 className='font-semibold'>{FormatTime(itemData.endDate)}</h1>
                <p className='text-xs font-semibold'>End</p>
            </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Item