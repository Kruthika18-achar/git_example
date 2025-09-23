import React, { useState } from "react";
const products = [
  {
    name: "Product 1",
    price: "$2",
    description: "This is the description for Product 1",
    image: "https://via.placeholder.com/200x150?text=Product+1",
  },
  {
    name: "Product 2",
    price: "$3",
    description: "This is the description for Product 2",
    image: "https://via.placeholder.com/200x150?text=Product+2",
  },
  {
    name: "Product 3",
    price: "$4",
    description: "This is the description for Product 3",
    image: "https://via.placeholder.com/200x150?text=Product+3",
  },
  {
    name: "Product 4",
    price: "$5",
    description: "This is the description for Product 4",
    image: "https://via.placeholder.com/200x150?text=Product+4",
  },
];

function Use_State() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(null);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const changeProduct = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setProduct(products[randomIndex]);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h1>Random Product Generator</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} width="200" height="150" />
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <h3>No product selected</h3>
      )}
      <button onClick={changeProduct}>Change Product</button>
    </>
  );
}

export default Use_State;
