import BotonLogin from "./HeaderComps/BotonLogin";
import BotonSignup from "./HeaderComps/BotonSignup";

const Header = () => {
  return (
    <header className="headerStyle">
      <h1>Título del e-commerce</h1>
      <BotonLogin />
      <BotonSignup />
    </header>
  );
};
export default Header;
