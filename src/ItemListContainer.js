import { useEffect, useState } from "react";
import ItemList from "./items/ItemList";

const ItemListContainer = ({ lista }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          res();
        } else {
          rej();
        }
      }, 2000);
    });
    promesa.then(() => {
      console.log("Anda");
      setProductos(lista);
    });
    promesa.catch(() => {
      console.log("No anda");
    });
  }, []);
  return (
    <>
      <ItemList prod={productos} />
    </>
  );
};

export default ItemListContainer;
