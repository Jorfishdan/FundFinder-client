import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function Homepage({
  user,
  setUser,
  isLoggedIn,
  setIsLoggedIn,
  resetUser,
  userId,
}) {
  return (
    <div>
      <Header
        user={user}
        setUser={setUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        resetUser={resetUser}
        userId={userId}
      />
      <Main />
      <Footer />
    </div>
  );
}
