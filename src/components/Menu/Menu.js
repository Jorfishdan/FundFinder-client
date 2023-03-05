import Gears from "../../assets/icons/setting.png";
import Email from "../../assets/icons/contact.png";
import Logout from "../../assets/icons/logout.png";
import Setting from "../Setting/Setting";
import { useState } from "react";

export default function Menu() {
  const [setting, setSetting] = useState(false);

  function handleSetting() {
    setSetting(!setting);
  }

  return (
    <main className="menu__container">
      <h1 className="menu__name">Hi, Username</h1>
      <div className="menu__box" onClick={() => handleSetting()}>
        <p className="menu__label" >
          Setting
        </p>
        <img className="menu__img" src={Gears} alt="Setting Icon" />
      </div>
      <div className="menu__box">
        <p className="menu__label">Contact</p>
        <img
          className="menu__img  menu__img-contact"
          src={Email}
          alt="Contact Icon"
        />
      </div>
      <div className="menu__box">
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
