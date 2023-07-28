import React, {useEffect, useState} from 'react'

function Header() 
{
    
    const[date, SetDate] = useState(new Date());

    function refreshClock() {
        SetDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, [date]);

    let today = new Date();

    const dayNumeric= today.toLocaleDateString("en-US", {
        day: "numeric"
    })

    const weekDay = today.toLocaleDateString("en-US", {
        weekday: 'long'
    })

    const monthName = today.toLocaleDateString("en-US", {
        month: "long",
    })

    const currTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })

  return (
    <div className='mx-5 my-5 grid grid-flow-col justify-center items-center gap-5 text-gray-900'>

        <div className='mx-auto h-full'>
            <h1 className='font-semibold text-md'>
                {weekDay}
            </h1>

            <h1 className='font-semibold text-6xl'>
                {dayNumeric}
            </h1>

            <h1 className='font-semibold text-6xl'>
                {(monthName).toUpperCase()}
            </h1>
        </div>
        
        <div className='bg-gray-400/40 rounded-full w-1 h-2/3'/>

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
