import React,{useEffect, useState} from "react";
import Header from "./Header";
import AddItem from "./AddBar";
import ItemList from "./ItemList";

function App() 
{
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState([])

  const blurBgClassName = " blur-sm";

  useEffect(() => {
    fetch("http://localhost:3000/items/")
    .then(response => response.json())
    .then(data => setItems(data))
}, [])


  return (
    <div className='absolute w-screen h-screen bg-stone-200'>
            <AddItem 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
      <div className={"w-screen h-screen"  + (isOpen ? blurBgClassName : "")}>
      <Header/>
      <ItemList 
        items={items}
        setIsOpen={setIsOpen}
      />

      </div>
    </div>
  );
}

export default App;