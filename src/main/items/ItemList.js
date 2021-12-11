import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.map((elemento, indice) => {
        <div>{elemento.title}</div>;
        return <Item datos={elemento.title} id={elemento.id} />;
      })}
    </>
  );
};
export default ItemList;
