import React from 'react';
import './App.css';
import ProductList from './component/Product';
import { data } from '../data/data';

function App() {
  return (
    <>
      {data.map((product, index) => (
        <ProductList 
          key={index} 
          name={product.name} 
          price={product.Price} 
          description={product.description}
          image={product.image}   
        />
      ))}
    </>
  );
}

export default App;
