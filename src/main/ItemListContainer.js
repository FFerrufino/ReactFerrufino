import ItemList from "./items/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const data = fetch("https://fakestoreapi.com/products");
  const datacat = fetch(`https://fakestoreapi.com/products/category/${id}`);

  useEffect(() => {
    setTimeout(() => {
      if (!id) {
        data
          .then((dataresp) => dataresp.json())
          .then((json) => {
            setProductos(json);
          })
          .catch((err) => console.log(err));
      } else {
        datacat
          .then((dataresp) => dataresp.json())
          .then((json) => {
            setProductos(json);
          })
          .catch((err) => console.log(err));
      }
    }, 1);
  }, [id]);

  return <ItemList data={productos} />;
};

export default ItemListContainer;
