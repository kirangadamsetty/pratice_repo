import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { productData } from './data';

function Products() {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef();

  const PRODUCTS_PER_PAGE = 10;

  // Load data when page number changes
  useEffect(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const newProducts = productData.slice(start, end);
    setVisibleProducts((prev) => [...prev, ...newProducts]);
  }, [page]);

  // IntersectionObserver to watch when user hits the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌀 Infinite Scroll Products</h1>
     
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}>
  {visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
      

      {/* This div is where IntersectionObserver watches */}
      <div ref={loaderRef} style={{ height: '50px', background: '#f0f0f0', textAlign: 'center' }}>
        <p>Loading more...</p>
      </div>
    </div>
  );
}

export default Products;
