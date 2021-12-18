import { createContext, useState } from "react";

export const context = createContext();

const { Provider } = context;

const CartContext = ({ children }) => {
  const valorInicial = [{ title: "", id: 0, quantity: 0 }];
  const [carrito, setCarrito] = useState(valorInicial);
  const [precio, setPrecio] = useState(0);

  const agregarItem = (e, cantidad) => {
    if (
      carrito.some(function (el) {
        return el.id === e.id;
      })
    ) {
      let copia = [...carrito];
      carrito.map((carrito2) => {
        if (carrito2.id === e.id) {
          copia = copia.filter((element) => element.id !== e.id);
          copia.push({ ...carrito2, quantity: carrito2.quantity + cantidad });
        }
      });
      console.log(carrito);
      setCarrito(copia);
    } else {
      const newProd = { title: e.title, id: e.id, quantity: cantidad };
      const copia = [...carrito];
      copia.push(newProd);
      setCarrito(copia);

      let cantidadAgregada = cantidad * e.price;
      setPrecio(precio + cantidadAgregada);
    }
  };

  const sacarItem = (e) => {
    let copia = [...carrito];
    copia = copia.filter((element) => element.id !== e.id);
    setCarrito(copia);
  };

  const borrarCarrito = (e) => {
    setCarrito(valorInicial);
  };

  const isInCart = (e) => {
    if (
      carrito.some(function (el) {
        return el.id === e.id;
      })
    ) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

  const metodos = {
    carrito,
    agregarItem,
    sacarItem,
    borrarCarrito,
    isInCart,
  };

  return <Provider value={metodos}>{children}</Provider>;
};

export default CartContext;
