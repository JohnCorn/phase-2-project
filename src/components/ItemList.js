import React from 'react'
import Item from './Item'
import { IoIosAddCircle } from "react-icons/io";

function ItemList({items,setIsOpen}) 
{

  const buttonClass = "w-80 h-20 rounded-2xl border-4 border-gray-400/20 bg-gray-400/10 flex justify-center items-center py-7 " + 
  "group transition duration-200 hover:scale-105 hover:bg-gray-200/10 hover:border-gray-400/40"

  return (
    <div 
    onClick={() => setIsOpen(true)}
    className='grid grid-flow-row gap-2 mt-5'>
      
        { items.map((item) => (
          <Item
          key={item.id}
          itemData ={item}
          />
        ))}

      <div className='flex justify-center items-center'>
        <div className={buttonClass}>
          <button>
            <IoIosAddCircle
            className='text-gray-400 transition duration-200 group-hover:scale-110 group-hover:text-gray-500'
              size={45}/>
          </button>
        </div>
      </div>

    </div>   
  )
}

export default ItemList