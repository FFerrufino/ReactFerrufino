import ItemCount from "./ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { context } from "../CartContext";

const ItemDetail = ({ data }) => {
  const resultado = useContext(context);
  // console.log(resultado.agregarItem);

  // const prodName = data.title;
  // const prodId = data.id;
  // const prodPrice = data.price;
  // const prod = { prodName, prodId, prodPrice };
  const prod = data;

  const enviarProducto = () => {
    resultado.agregarItem(prod, cantidad);
  };

  const [cantidad, setCantidad] = useState(0);

  const cantidadrequerida = (parametro) => {
    setCantidad(parametro);
  };
  const saludo = () => {
    console.log(cantidad);
  };
  return (
    <div>
      <ul>
        <li>Nombre: {data.title}</li>
        <li>Descripción: {data.description}</li>
        <li>El precio es: {data.price}</li>
        <li>
          <img src={data.image} />
        </li>
      </ul>
      <ItemCount datas={50} func={cantidadrequerida} />
      <button onClick={enviarProducto}>Agregar al carrito</button>
    </div>
  );
};
export default ItemDetail;
