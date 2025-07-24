// src/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', height:"400px", width:"300px" }}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductCard;
