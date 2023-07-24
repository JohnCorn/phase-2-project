import React from 'react'

function AddBar() {
  return (
    <div className='w-full flex justify-center mt-6 mb-3'>

        <div className='grid grid-flow-col justify-center'>

            <div>
                <form className="bg-gray-300 rounded-lg px-4 h-10 flex items-center justify-center">
                    <label>
                        Name:
                        <input
                            className='bg-white rounded-full'
                            type="text" name="name" />
                    </label>
                    <input type="submit" value="+" />
                </form>
          </div>

        </div>
    </div>
  )
}

export default AddBar