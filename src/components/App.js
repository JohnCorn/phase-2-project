import React,{useEffect, useState} from "react";
import Header from "./Header";
import AddItem from "./AddBar";
import ItemList from "./ItemList";

function App() 
{
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState([])

  const blurBgClassName = " blur-lg brightness-50";

  useEffect(() => {
    fetch("http://localhost:3000/toys/")
    .then(response => response.json())
    .then(data => setItems(data))
}, [])


  return (
    <div className='absolute w-screen h-screen'>
      <AddItem isOpen={isOpen}/>
      <div className={"w-screen h-screen"  + (isOpen ? blurBgClassName : "")}>
      <Header/>
      <ItemList 
        items={items}
      />
      </div>
    </div>
  );
}

export default App;