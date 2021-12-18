import Men from "./HeaderComps/Men";
import Women from "./HeaderComps/Women";
import CartWidget from "./HeaderComps/CartWidget";
import Home from "./HeaderComps/Home";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerStyle">
      <h1>Título del e-commerce</h1>
      <CartWidget />
      <NavLink to="/">
        <Home />
      </NavLink>
      <NavLink to="/categoria/men's clothing">
        <Men />
      </NavLink>
      <NavLink to="/categoria/women's clothing">
        <Women />
      </NavLink>
    </header>
  );
};
export default Header;
