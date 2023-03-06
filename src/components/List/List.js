import React, { useState } from "react";
import Filter from "../Filter/Filter";


export default function List({ addToSavedItems }) {
  const [page, setPage] = useState(null);
  const [filteredResults, setFilteredResults] = useState(null);
  const [deletedItems, setDeletedItems] = useState([]);

  function handleDelete(event,id) {
    event.preventDefault()
    event.stopPropagation()
    setDeletedItems([...deletedItems, id]);
    console.log("clicked")
  }

  function showResults() {
    const filteredAndNotDeletedResults = filteredResults.filter(
      (result) => !deletedItems.includes(result.id)
    );

    
    return (
      <>
        {filteredAndNotDeletedResults.slice(0, 4).map((result) => (
          
          <section key={result.id} className="list__items">
            <div className={"list__items--box" + (deletedItems.includes(result.id) ? " deleted" : "")} key={result.id}>
              <h1 className="list__items--title">{result.name}</h1>
              <h2 className="list__items--deadline">Due:{result.due}</h2>
              <a href={result.website} className="list__link">
              <h3 className="list__items--deadline">
                Learn more
              </h3>
              </a>
              <div className="list__items--buttons">
                <button className="list__items--buttons--save"  onClick={() => addToSavedItems(result)}>Save</button>
                <button className="list__items--buttons--apply">Apply</button>
                <button className="list__items--buttons--hide" onClick={(event) => handleDelete(event, result.id)}>Delete</button>
              </div>
            </div>
          </section>
          
        ))}
      </>
    );
  }

  return (
    <>
      <main className="list__container">
        <Filter
          setPage={setPage}
          setFilteredResults={setFilteredResults}
          filteredResults={filteredResults}
        />
        {filteredResults ? (
          <>
            <h1 className="list__title">Current Postings</h1>
            {showResults()}
          </>
        ) : (
          <p> Loading...</p>
        )}
      </main>
    </>
  );
}

