import React from 'react';

function ProductList({name,price,description}) {
    return (
        <>
        <h1>Product Name </h1>
        <p>Price: {price}</p>
        <p>Product description: {description}</p>
        </>
    )
}

export default ProductList;