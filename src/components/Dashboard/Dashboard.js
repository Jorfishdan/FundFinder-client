// import "./Dashboard.scss";
import Filter from "../Filter/Filter";

import { useState } from "react";

export default function Dashboard({savedItems}) {
  const [deletedItems, setDeletedItems] = useState([]);


  function handleDelete(event,id) {
    event.preventDefault()
    event.stopPropagation()
    setDeletedItems([...deletedItems, id]);
    console.log("clicked")
  }

  return (
    <main className="dashboard__container">
      <section className="dashboard__saved">
        <h1 className="dashboard__title">Saved</h1>
        {savedItems.map((item) => (
          <a href={item.website} className="dahsboard__saved--link">
        <div className={`dashboard__saved--container${deletedItems.includes(item.id) ? " deleted" : ""}`} key={item.id}>
          <div className="dashboard__saved--box" >
            <h1 className="dashboard__saved--title">
              {item.name}
            </h1>
            <h2 className="dashboard__saved--deadline">Due: {item.due}</h2>
          </div>
       
          <div className="dashboard__saved--buttons">
            <button className="dashboard__saved--buttons--apply">Apply</button>
            
            <button className="dashboard__saved--buttons--hide" onClick={(event) => handleDelete(event, item.id)}
>Delete</button>
        </div>
        </div>
        </a>
        
         ))}
      </section>
       
      <section className="dashboard__applied">
        <h1 className="dashboard__title">Applied</h1>
        <div className="dashboard__applied--box">
          <h1 className="dashboard__applied--title">
            This is a loanThis is a loanThis is a loanThis is a loan
          </h1>
          <h2 className="dashboard__applied--deadline">This is a deadline</h2>
        </div>
      </section>
    </main>
  );
}
