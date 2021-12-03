import React, { useState } from "react";

const ItemCount = ({ nro }) => {
  const [counter, setCounter] = useState(nro);
  let stock = 10;

  const handleAdd = () => {
    if (stock > counter) {
      setCounter(counter + 1);
    }
  };
  const handleReset = () => {
    setCounter(nro);
  };
  const handleSubstract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>El stock disponible es de {stock}</h2>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

export default ItemCount;
