import ItemDetailContainer from "./main/ItemDetailContainer";
import ItemListContainer from "./main/ItemListContainer";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  // let listaproductos = [
  //   {
  //     id: 1,
  //     title: "producto 1",
  //     description: "descripción 1",
  //     price: "precio 1",
  //     pictureUrl: "Url 1",
  //   },
  //   {
  //     id: 2,
  //     title: "producto 2",
  //     description: "descripción 2",
  //     price: "precio 2",
  //     pictureUrl: "Url 2",
  //   },
  //   {
  //     id: 3,
  //     title: "producto 3",
  //     description: "descripción 3",
  //     price: "precio 3",
  //     pictureUrl: "Url 3",
  //   },
  //   {
  //     id: 4,
  //     title: "producto 4",
  //     description: "descripción 4",
  //     price: "precio 4",
  //     pictureUrl: "Url 4",
  //   },
  // ];
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
};

export default Main;
