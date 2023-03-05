import Gears from "../../assets/icons/setting.png";
import Email from "../../assets/icons/contact.png";
import Logout from "../../assets/icons/logout.png";
import Setting from "../Setting/Setting";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Menu({
  openMenu,
  setting,
  setSetting,
  user,
  setUser,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();

  if (!openMenu) return null;

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

  return (
    <main className="menu__container">
      <h1 className="menu__name">Hi, Username</h1>
      <div className="menu__box" onClick={() => handleSetting()}>
        <p className="menu__label">Setting</p>
        <img className="menu__img" src={Gears} alt="Setting Icon" />
      </div>
      <div className="menu__box">
        <Link to ="/contact" className="menu__label">Contact</Link>
        <img
          className="menu__img  menu__img-contact"
          src={Email}
          alt="Contact Icon"
        />
      </div>
      <div
        className="menu__box"
        onClick={(e) => {
          handleLogout(e);
        }}
      >
        <p className="menu__label">Logout</p>
        <img
          className="menu__img  menu__img-logout"
          src={Logout}
          alt="Logout Icon"
        />
      </div>
      <Setting openSetting={setting} />
    </main>
  );
}
