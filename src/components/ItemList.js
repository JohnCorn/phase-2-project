import React from 'react'
import Item from './Item'
import { IoIosAddCircle } from "react-icons/io";

function ItemList({items,setIsOpen}) {
  return (
    <div className='grid grid-flow-row gap-2 mt-5'>
      
      <div className='flex justify-center items-center'>
        <div className='w-1/3 rounded-2xl border-4 border-gray-400/20 bg-gray-400/10 flex justify-center items-center py-7' >
      <button>
        <IoIosAddCircle
        onClick={() => setIsOpen(true)}
        className='text-gray-400 hover:text-gray-600'
          size={45}/>
      </button>
      </div>
      </div>

        { items.map((item) => (
          <Item
          key={item.id}
          itemData ={item}
          />
        ))}
    </div>
    
  )
}

export default ItemList