import List from "../List/List";
import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";


export default function Main() {
  const [savedItems, setSavedItems] = useState([]);

  function addToSavedItems(item) {
    setSavedItems([...savedItems, item]);
  }

  return (
    <main className = "current__container">
      <List addToSavedItems={addToSavedItems}/>
      <Dashboard savedItems={savedItems}/>
    </main>
  )
}
