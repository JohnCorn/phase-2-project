import React from 'react'
import Item from './Item'

function ItemList({items, removeItem}) 
{

  return (
    <div className='grid grid-flow-row gap-2 mt-5'>    
        { items.map((item) => (
          <Item
          key={item.id}
          itemData ={item}
          removeItem={removeItem}

          />
        ))}
    </div>   
  )
}

export default ItemList