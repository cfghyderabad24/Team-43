import React, { useState } from 'react';
import './Product.css';
import padsImage from './clothPad.png';
import cupsImage from './menstrualCup.png';

const Product = () => {
    const [products] = useState([
      {
        id: 1,
        name: 'Cloth Menstrual Pads',
        description: 'Reusable and eco-friendly cloth menstrual pads.',
        price: 12.99,
        image: padsImage,
      },
      {
        id: 2,
        name: 'Menstrual Cups',
        description: 'Comfortable and reusable menstrual cups.',
        price: 24.99,
        image: cupsImage,
      },
    ]);
  
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    return (
      <div className="product-page">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Product;