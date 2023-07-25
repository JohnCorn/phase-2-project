import React from 'react'
import Item from './Item'

function ItemList({items}) {
  return (
    <div className='flex justify-center items-center mx-auto my-1'>
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