import Carrito from "../imgs/107831.png";
import { useContext } from "react";
import { context } from "../CartContext";

const CartWidget = () => {
  const resultado = useContext(context);
  console.log(resultado);
  return <img className="icono-header" src={Carrito} />;
};

export default CartWidget;
