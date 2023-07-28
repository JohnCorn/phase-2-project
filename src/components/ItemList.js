import React, {useState} from 'react'
import Item from './Item'

function ItemList({items, removeItem}) 
{
  const [completeCount, setCompleteCount] = useState(0)

  function HandleItemComplete()
  {
    setCompleteCount(completeCount + 1)
  }

  return (
    <div className='grid grid-flow-row gap-2 mt-5'>    
        { items.map((item) => (
          <Item
          key={item.id}
          itemData ={item}
          removeItem={removeItem}
          itemComplete={HandleItemComplete}
          />
        ))}
    </div>   
  )
}

export default ItemList