// import "./Dashboard.scss";
import Filter from "../Filter/Filter";

import { useState } from "react";

export default function Dashboard() {
  const [filteredResults, setFilteredResults] = useState(null)
  return (
    <main className="dashboard__container">
      <section className="dashboard__saved">
        <h1 className="dashboard__title">Saved</h1>
        <div className="dashboard__saved--container">
          <div className="dashboard__saved--box">
            <h1 className="dashboard__saved--title">
              This is a loanThis is a loanThis is a loanThis is a loan
            </h1>
            <h2 className="dashboard__saved--deadline">This is a deadline</h2>
          </div>
          <div className="dashboard__saved--buttons">
            <button className="dashboard__saved--buttons--apply">Apply</button>
            <button className="dashboard__saved--buttons--hide">Delete</button>
          </div>
        </div>
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
      <Filter filteredResults={filteredResults} setFilteredResults={setFilteredResults} />
    </main>
  );
}
