import Header from "../components/Header/Header";
import List from "../components/Main/Main";
import Footer from "../components/Footer/Footer";


export default function Homepage({user, setUser}) {
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <List/>
      <Footer/>
    </div>
  )
}
