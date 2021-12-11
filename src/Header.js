import Men from "./HeaderComps/Men";
import Women from "./HeaderComps/Women";
import Icon from "./HeaderComps/Icon";
import Home from "./HeaderComps/Home";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerStyle">
      <h1>Título del e-commerce</h1>
      <Icon />
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
