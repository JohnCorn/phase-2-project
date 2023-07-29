import React,{useEffect, useState} from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
function App()
{
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/items/")
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  function handleAddItem(item)
  {
    console.log("AddItems", item)

    const configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
     }
     
     fetch('http://localhost:3000/items', configObj)
      .then(res => res.json())
      .then(data => {
        const i = [...items, data]
        setItems(i)
        console.log( i)
        // TODO: we need to make a copy of the current items and 
        // then add to it 
      })
      // TODO: clear form
  }

  function handleRemoveItem(id) {
    console.log("handleRemoveItem", id);
    const filterItems = items.filter((item) => item.id !== id);
    setItems(filterItems);
  }

  return (
    <div className='absolute w-screen h-screen bg-stone-200'>
      <NavBar/>
      <Header/> 
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/item">
          <ItemList 
            items={items} 
            removeItem={handleRemoveItem}
          />
        </Route>

        <Route exact path="/add">
          <AddItem addItem={handleAddItem}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;