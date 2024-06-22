
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart, calculatePrice, addtolocalstorage } from '../redux/cartAction';
import {FiShoppingCart} from "react-icons/fi";
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



const Home1 = () => {
  const {cartItems} = useSelector(state=>state.cart);
  const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yeIg9qpPJNvkZXJeCl6h2-zPLG_fz4vtpQ&s";
  const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn30rLNeFqqWZL6HjJ9wteVXWpUCrbW7Ml6A&s";
  const productList = [
    { imgSrc: img1, name: 'SiliconMenstrual Cup', price: 699,description: 'A menstrual cup is a flexible, bell-shaped cup made typically from medical-grade silicone or latex rubber. It is designed to collect menstrual fluid rather than absorb it, offering a modern and sustainable alternative to traditional menstrual products.',durability: 8,id: 'tytyt' },
    { imgSrc: img2, name: 'Cloth Pads', price: 399,description:'Cloth pads are eco-friendly and reusable menstrual products made from breathable, often organic materials like cotton or bamboo. They offer a sustainable alternative to disposable pads, contributing significantly to reducing waste and environmental impact.' ,durability:2,id: 'dfslksd' }
  ];

  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch(addToCart(options));
    dispatch(addtolocalstorage());
    dispatch(calculatePrice());
    toast.success("Added to Cart");
  };

  return (
    <div className="home1">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          description={i.description}
          durability={i.durability}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
      <div className="cart-icon">
      <Link to='/cart'><FiShoppingCart/> <p>{cartItems.length}</p> </Link>
     
      </div>
    </div>
  );
};

const ProductCard = ({ name, id, price,description,durability, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
<<<<<<< HEAD
    <h4>Cost: Rs.{price}</h4>
    <p>{description}</p>
    <p>Durability: {durability}years</p>
=======
    <h4>${price}</h4> 
>>>>>>> ad687b9fccbbaa236b1bc4e9b118d1d5eab8c65f
    <button onClick={() => handler({ name, price, id, qty: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home1;