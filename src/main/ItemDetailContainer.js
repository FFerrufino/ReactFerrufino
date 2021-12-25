import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((dataresp) => dataresp.json())
      .then((json) => {
        setProducto(json);
      })
      .catch((err) => console.log(err));
  }, []);
  return <ItemDetail data={producto} />;
};
export default ItemDetailContainer;
