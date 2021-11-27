import BotonLogin from "./HeaderComps/BotonLogin";
import BotonSignup from "./HeaderComps/BotonSignup";
import Icon from "./HeaderComps/Icon";

const Header = () => {
  return (
    <header className="headerStyle">
      <h1>Título del e-commerce</h1>
      <BotonLogin />
      <BotonSignup />
      <Icon />
    </header>
  );
};
export default Header;
