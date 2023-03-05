import Logo from "../../assets/icons/logo/logo2.png";
import Search from "../../assets/icons/search.png";
import Menu from "../../assets/icons/menu.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header__container">
      <Link to="/dashboard"  className="header__logo">
        <img className="header__logo" src={Logo} alt="FundFinder Logo" />
      </Link>
      <section className="header__nav">
        <img
          className="header__nav--search"
          src={Search}
          alt="Magnifying glass"
        />
        <button className="header__nav--sign">Sign-up</button>
        <img className="header__nav--menu" src={Menu} alt="Menu icon" />
      </section>
    </header>
  );
}
