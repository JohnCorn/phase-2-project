import React from 'react'
import { IoMdCloseCircleOutline,  IoMdCloseCircle} from "react-icons/io";

function AddItem({isOpen, setIsOpen}) {
    /* TODO:
    - make this a card of its own
    -all user to select a bunch of different 
    settings before adding it to the heap
*/

if (isOpen)
{
    return (
        <div className='absolute inset-0 z-40'>
            <div className='flex justify-center items-center h-full'>
                
                <div className="bg-blue-300 h-10 w-10">
                    <h1>Fill in</h1>
                    <button>
        <IoMdCloseCircleOutline
        onClick={() => setIsOpen(false)}
        className='text-gray-400 hover:text-gray-600'
          size={45}/>
      </button>
                </div>

            </div>
        </div>
  )
}
  else
  {
    return (    
        <div>
        </div>
    )
  }
}

export default AddItem