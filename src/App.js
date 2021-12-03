import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

const App = () => {
  let listaproductos = [
    {
      id: 1,
      title: "producto 1",
      description: "descripción 1",
      price: "precio 1",
      pictureUrl: "Url 1",
    },
    {
      id: 2,
      title: "producto 2",
      description: "descripción 2",
      price: "precio 2",
      pictureUrl: "Url 2",
    },
    {
      id: 3,
      title: "producto 3",
      description: "descripción 3",
      price: "precio 3",
      pictureUrl: "Url 3",
    },
    {
      id: 4,
      title: "producto 4",
      description: "descripción 4",
      price: "precio 4",
      pictureUrl: "Url 4",
    },
  ];
  return (
    <>
      <Header />
      <ItemListContainer lista={listaproductos} />
      <ItemCount nro={1} />
    </>
  );
};

export default App;
