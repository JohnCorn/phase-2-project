import React,{useEffect, useState} from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import Confetti from './Confetti';

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/items/")
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  function AddItems(description, dueDate, priority)
  {
    console.log("AddItems")

    const configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: "Titanic"
      })
     }
     
     fetch('http://localhost:3000/items', configObj)
      .then(res => res.json())
      .then(data => setItems(data))
      // TODO: clear form
  }

  function HandleRemoveItem(id) {
    const filterItems = items.filter((item) => item.id !== id);
    setItems(filterItems);
  }

  return (
    <div className='absolute w-screen h-screen bg-stone-200'>
      <Header/> 
      <ItemList 
        items={items} 
        removeItem={HandleRemoveItem}
      />
    </div>
  );
}

export default App;