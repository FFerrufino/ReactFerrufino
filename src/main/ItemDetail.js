const ItemDetail = ({ data }) => {
  console.log(data);
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
    </div>
  );
};
export default ItemDetail;
