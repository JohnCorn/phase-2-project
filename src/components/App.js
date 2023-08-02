import React,{useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import NavBar from "./NavBar";
import Home from "./Home";

function App()
{
  
  const [items, setItems] = useState([])
  const [priorityFilter, setPriorityFilter] = useState("")
  const [dueDateFilter, setdueDateFilter] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/items/")
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  function handleAddItem(item)
  {
    const configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
     }
     
     fetch('http://localhost:3000/items', configObj)
      .then(res => res.json())
      .then(data =>  setItems([...items, data]))
  }

  function handleRemoveItem(id) 
  {
    const nonRemovedItems = items.filter((item) => item.id !== id)
    setItems(nonRemovedItems)
  }

  const filterItems = items.filter((item) =>
  {
      if (priorityFilter === "")
        return true

      return item.priority === priorityFilter
    }
    ).filter((i) => {
    if (dueDateFilter === "")
      return true

    return i.dueDate === dueDateFilter
  })


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
            items={filterItems} 
            removeItem={handleRemoveItem}
            priorityFilter={priorityFilter}
            filterByPriority={setPriorityFilter}
            dueDateFilter={dueDateFilter}
            filterByDueDate={setdueDateFilter}
          />
        </Route>

        <Route exact path="/add">
          <AddItem addItem={handleAddItem}/>
        </Route>

      </Switch>
    </div>
  )
}

export default App