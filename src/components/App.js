import React,{useEffect, useState} from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function App()
{
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
      <NavBar/>
      <Switch>

        <Route exact path="/">
          <Header/> 
        </Route>

        <Route exact path="/item">
          <Header/> 

          <ItemList 
            items={items} 
            removeItem={HandleRemoveItem}
          />
        </Route>

        <Route exact path="/add">
          <h1>Add</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;