import React, { useState } from "react";
import Filter from "../Filter/Filter";


export default function List() {
const [page, setPage] = useState(null)
const [filteredResults, setFilteredResults] = useState(null)

  return (
    <>
    <main className="list__container">
       <Filter setPage={setPage} setFilteredResults={setFilteredResults} filteredResults={filteredResults}/>
      {/* <h1 className="list__title">Current Postings</h1> */}
      {filteredResults ? (
        <>
        {filteredResults.map((result) => (
      <section key={result.id} className="list__items">
        {/* {filteredResults.map((result) => ( */}
        <div lassName="list__items--box">
          <h1 className="list__items--title">{result.name}</h1>
          <h2 className="list__items--deadline">{result.due}</h2>
        <div className="list__items--buttons">
          <button className="list__items--buttons--save">Save</button>
          <button className="list__items--buttons--apply">Apply</button>
          <button className="list__items--buttons--hide">Delete</button>
          </div>
        </div>
      
      </section>
       ))}
       </>
      ) : (
        <p> Loading...</p>
        )}
    </main>
    </>
  );
 
}
// setFilteredResults={setFilteredResults} 