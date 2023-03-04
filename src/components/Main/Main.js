import "./Main.scss";
import List from "../List/List";
import Dashboard from "../Dashboard/Dashboard";


export default function Main() {
  return (
    <main className = "dashboard__container">
      <List/>
      <Dashboard/>
    </main>
  )
}
