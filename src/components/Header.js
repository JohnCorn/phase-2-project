import React, {useEffect, useState} from 'react'

function Header() 
{

    const[time, setTime] = useState("");

    useEffect(() => {

        setTime(`${currHour %12}:${currMinute}`);
    },[]);

    let today = new Date();
    let currHour = today.getHours();
    let currMinute = today.getMinutes();

    const monthNumeric = today.toLocaleDateString("en-US", {
        month: "2-digit"
    })

    const dayNumeric= today.toLocaleDateString("en-US", {
        day: "numeric"
    })

    const weekDay = today.toLocaleDateString("en-US", {
        weekday: 'long'
    })

    const monthName = today.toLocaleDateString("en-US", {
        month: "long",
    })

    const currTime = today.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })

    

  return (
    <div className='mx-5 grid grid-flow-col justify-center gap-5'>

        <div className='mx-auto h-full items-center'>
            <h1 className='font-semibold text-md'>
                {weekDay}
            </h1>

            <h1 className='font-semibold text-6xl'>
                {monthNumeric +"." + dayNumeric}
            </h1>

            <h1 className='font-semibold text-6xl'>
                {(monthName).toUpperCase()}
            </h1>
        </div>

        <div className='flex h-full my-auto items-center'>
            <div className='bg-gray-300 rounded-full w-1 h-2/3'/>
        </div>

        <div className='flex h-full items-center'> 
            <div>
                <h1 className='font-semibold text-xl'>{currTime}</h1>
                <h1 className='font-regular text-sm'>New York</h1>
            </div>      
        </div>

    </div>
  )
}


export default Header
