import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <ul>
      {data.map((elemento, indice) => {
        <div>{elemento.title}</div>;
        return <Item datos={elemento.title} id={elemento.id} />;
      })}
    </ul>
  );
};
export default ItemList;
