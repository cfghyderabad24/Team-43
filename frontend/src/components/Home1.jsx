import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, calculatePrice, addtolocalstorage } from '../redux/cartAction';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home1 = () => {
  const { cartItems } = useSelector(state => state.cart);
  const img1 = "https://cdn.shopify.com/s/files/1/0649/8494/0772/files/Menstrual-cup-sizes.jpg?v=1660705302";
  const img2 = "https://www.india.com/wp-content/uploads/2017/04/reusable-cloth-pads.jpg";

  const productList = [
    {
      imgSrc: img1,
      name: 'Silicon Menstrual Cup',
      price: 699,
      description: 'A menstrual cup is a flexible, bell-shaped cup made typically from medical-grade silicone or latex rubber. It is designed to collect menstrual fluid rather than absorb it, offering a modern and sustainable alternative to traditional menstrual products.',
      durability: 8,
      id: 'tytyt'
    },
    {
      imgSrc: img2,
      name: 'Cloth Pads',
      price: 399,
      description: 'Cloth pads are eco-friendly and reusable menstrual products made from breathable, often organic materials like cotton or bamboo. They offer a sustainable alternative to disposable pads, contributing significantly to reducing waste and environmental impact.',
      durability: 2,
      id: 'dfslksd'
    }
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch(addToCart(options));
    dispatch(addtolocalstorage());
    dispatch(calculatePrice());
    toast.success("Added to Cart");
  };

  return (
    <div style={styles.home}>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          imgSrc={product.imgSrc}
          name={product.name}
          price={product.price}
          description={product.description}
          durability={product.durability}
          id={product.id}
          handler={addToCartHandler}
        />
      ))}
      <div style={styles.cartIcon}>
        <Link to="/cart" style={styles.cartLink}>
          <FiShoppingCart /> <p style={styles.cartCount}>{cartItems.length}</p>
        </Link>
      </div>
    </div>
  );
};

const ProductCard = ({ name, id, price, description, durability, handler, imgSrc }) => (
  <div style={styles.productCard}>
    <img src={imgSrc} alt={name} style={styles.productImage} />
    <p style={styles.productName}><strong>{name}</strong></p>
    <h4 style={styles.productPrice}>Cost: Rs. {price}</h4>
    <p style={styles.productDescription}>{description}</p>
    <p style={styles.productDurability}>Durability: {durability} years</p>
`    <button onClick={() => handler({ name, price, id, qty: 1, imgSrc })} style={styles.addButton}>
`      Add to Cart
    </button>
  </div>
);

const styles = {
  home: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  },
  productCard: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    flex: '1 1 calc(50% - 40px)',
    maxWidth: 'calc(50% - 40px)',
    padding: '20px',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    display: 'block',
    margin: '0 auto',
    maxHeight: '300px',  
    objectFit: 'cover',  
  },
  productName: {
    margin: '10px 0',
    fontSize: '16px',
  },
  productPrice: {
    margin: '10px 0',
    fontSize: '18px',
    color: '#333',
  },
  productDescription: {
    margin: '10px 0',
  },
  productDurability: {
    margin: '10px 0',
  },
  addButton: {
    background: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  addButtonHover: {
    background: '#218838',
  },
  cartIcon: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    background: '#28a745',
    color: '#fff',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  cartLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  cartCount: {
    margin: '0',
    fontSize: '14px',
  }
};

export default Home1;
