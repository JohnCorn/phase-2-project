import React from 'react'

function AddItem({isOpen}) {
    /* TODO:
    - make this a card of its own
    -all user to select a bunch of different 
    settings before adding it to the heap
*/

return (    
    <div >
    </div>
);

if (isOpen)
{
  return (
        <div className='absolute w-full flex justify-center mt-6 mb-3 z-10'>

            <div className='grid grid-flow-col justify-center'>

                <div>
                    <form className="bg-gray-300 rounded-lg px-4 h-10 flex items-center justify-center">
                        <label>
                            Name:
                            <input
                                className='bg-white rounded-full'
                                type="text" name="name" />
                            <select value="grapefruit" onChange={"this.handleChange"}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </label>
                        <input type="submit" value="+" />
                    </form>
            </div>

            </div>
        </div>
  )
}
  else
  {
    return (    
        <div className='w-full flex justify-center mt-6 mb-3'>
        </div>
    )
  }
}

export default AddItem