import "./List.scss";
import React from "react";

export default function List() {
  return (
    <main className="list__container">
      <h1 className="list__title">Current Postings</h1>
      <section className="list__items">
        <div className="list__items--box">
          <h1 className="list__items--title">This is a loanThis is a loanThis is a loanThis is a loan</h1>
          <h2 className="list__items--deadline">This is a deadline</h2>
        </div>
        <div className="list__items--buttons">
          <button className="list__items--buttons--save">Save</button>
          <button className="list__items--buttons--apply">Apply</button>
          <button className="list__items--buttons--hide">Delete</button>
        </div>
      </section>
    </main>
  );
}
