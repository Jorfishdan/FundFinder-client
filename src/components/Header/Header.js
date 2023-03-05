import Logo from "../../assets/icons/logo/logo2.png";
import Search from "../../assets/icons/search.png";
import Menu from "../../assets/icons/menu.png";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Dropmenu from "../Menu/Menu";

export default function Header({ user, setUser, isLoggedIn, setIsLoggedIn }) {
  const [menu, setMenu] = useState(false);
  const [setting, setSetting] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
        setSetting(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function handleMenu() {
    setMenu(!menu);
    setSetting(false);
  }
  return (
    <header className="header__container" ref={menuRef}>
      <Link to="/dashboard" className="header__logo">
        <img className="header__logo" src={Logo} alt="FundFinder Logo" />
      </Link>
      <section className="header__nav">
        <img
          className="header__nav--search"
          src={Search}
          alt="Magnifying glass"
        />
        <Link to="/signup" className="header__nav--sign">
          Sign-up
        </Link>
        <img
          onClick={() => handleMenu()}
          className="header__nav--menu"
          src={Menu}
          alt="Menu icon"
        />
      </section>
      <Dropmenu
        openMenu={menu}
        setOpenMenu={setMenu}
        setting={setting}
        setSetting={setSetting}
        user={user}
        setUser={setUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </header>
  );
}
