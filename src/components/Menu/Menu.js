import Gears from "../../assets/icons/setting.png";
import Email from "../../assets/icons/contact.png";
import Logout from "../../assets/icons/logout.png";
import Home from "../../assets/icons/home.png";
import Setting from "../Setting/Setting";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Menu({
  openMenu,
  setting,
  setSetting,
  user,
  setUser,
  isLoggedIn,
  setIsLoggedIn,
  resetUser,
  userId,
  currentEmail,
  currentName, 
  setCurrentEmail
}) {
  const navigate = useNavigate();

  if (!openMenu) return null;

  const userName = currentName || "Guest"

  function handleSetting() {
    setSetting(!setting);
  }

  const handleLogout = (event) => {
    setUser({});
    setIsLoggedIn(false);

    if (Object.keys(user).length === 0 && !isLoggedIn) {
      navigate("/");
    }
  };

  const handleHome = () => {
    navigate("/dashboard");
  };

  return (
    <main className="menu__container">
      <h1 className="menu__name">Hi, {userName}</h1>
      <div className="menu__box" onClick={handleHome}>
        <p className="menu__label">Home</p>
        <img className="menu__img menu__img-home" src={Home} alt="Home Icon" />
      </div>
      <div className="menu__box" onClick={() => handleSetting()}>
        <p className="menu__label">Setting</p>
        <img className="menu__img" src={Gears} alt="Setting Icon" />
      </div>
      <div className="menu__box">
        <Link to="/contact" className="menu__label">
          Contact
        </Link>
        <img
          className="menu__img  menu__img-contact"
          src={Email}
          alt="Contact Icon"
        />
      </div>
      <div
        className="menu__box"
        onClick={() => {
          handleLogout();
        }}
      >
        <p className="menu__label">Logout</p>
        <img
          className="menu__img  menu__img-logout"
          src={Logout}
          alt="Logout Icon"
        />
      </div>
      <Setting
        openSetting={setting}
        isLoggedIn={isLoggedIn}
        resetUser={resetUser}
        userId={userId}
        currentEmail={currentEmail}
        setCurrentEmail={setCurrentEmail}
      />
    </main>
  );
}
