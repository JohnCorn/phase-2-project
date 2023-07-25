import React from 'react'

function Item ({itemData}) {
  return (
    <div className='w-1/3 rounded-2xl bg-red-500 grid grid-flow-row gap-10 text-white '>

    <div className='mx-4 my-2 grid grid-flow-row gap-5'>

        {/* Top Half */}
        <div className='grid grid-flow-col items-stretch'>
            <div className='border-2 border-yellow-300 w-3/4'>
                <h1>You Have A meetingYou Have A meeting You Have A meeting You Have A meeting</h1>
            </div>

            <h1 className='text-right'>04.10</h1>
        </div>

        {/* Bottom Half */}
        <div className='grid grid-flow-col items-stretch mb-2'>
            <div className=''>
                <h1 className='font-semibold'>3:00pm</h1>
                <p className='text-xs font-semibold'>Start</p>
            </div>

            <div className='bg-white text-red-500 rounded-full text-center flex justify-center items-center my-2 mx-2'>
                <h1>30 Min</h1>
            </div>

            <div className='text-right'>
                <h1 className='font-semibold'>3:30pm</h1>
                <p className='text-xs font-semibold'>End</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Item