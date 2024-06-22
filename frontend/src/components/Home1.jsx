
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart, calculatePrice, addtolocalstorage } from '../redux/cartAction';
import {FiShoppingCart} from "react-icons/fi";
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



const Home1 = () => {
  const {cartItems} = useSelector(state=>state.cart);
  const img1 = "https://static.sweetcare.pt/img/prd/488/v-638350450734038524/ammo-019820zj_01.webp";
  const img2 = "https://tse2.mm.bing.net/th?id=OIP.tEkiCbWYiOPPyhdmF36mnQHaE8&pid=Api&P=0&h=180";
  const productList = [
    { imgSrc: img1, name: 'Menstrual Cup', price: 12000, id: 'tytyt' },
    { imgSrc: img2, name: 'Sanitary pads', price: 9000, id: 'dfslksd' }
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

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, qty: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home1;