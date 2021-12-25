import ItemDetailContainer from "./main/ItemDetailContainer";
import ItemListContainer from "./main/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./HeaderComps/Cart";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
};

export default Main;
