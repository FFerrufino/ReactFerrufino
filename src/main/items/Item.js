import { NavLink } from "react-router-dom";

const Item = ({ datos, id }) => {
  return (
    <ul>
      <li>
        {datos} <NavLink to={"/item/" + id}>Ver detalles</NavLink>
      </li>
    </ul>
  );
};
export default Item;
