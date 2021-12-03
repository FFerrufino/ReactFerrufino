import Item from "./Item";

const ItemList = ({ prod }) => {
  return (
    <>
      {prod.map((elemento, indice) => {
        <div>{elemento.title}</div>;
        return <Item datos={elemento.title} />;
      })}
    </>
  );
};
export default ItemList;
