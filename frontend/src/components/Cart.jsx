import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, delFromCart, removeFromCart, addtolocalstorage, calculatePrice } from '../redux/cartAction';

const Cart = () => {
  const { cartItems, Subtotal, Shipping, Tax, Total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to hold the total price
  const [totalPrice, setTotalPrice] = useState(Total);

  const increment = (id) => {
    dispatch(addToCart({ id }));
    dispatch(calculatePrice());
    dispatch(addtolocalstorage());
    updateTotalPrice();
  };

  const decrement = (id) => {
    dispatch(delFromCart(id));
    dispatch(calculatePrice());
    dispatch(addtolocalstorage());
    updateTotalPrice();
  };

  const deletee = (id) => {
    dispatch(removeFromCart({ id }));
    dispatch(calculatePrice());
    dispatch(addtolocalstorage());
    updateTotalPrice();
  };

  const handlePayment = () => {
    // Navigate to the payment form page
    navigate('/user/checkout');

    // Optionally, you can update the total price state here as well
    setTotalPrice(Total);
  };

  // Function to update the total price after each cart update
  const updateTotalPrice = () => {
    setTotalPrice(Total);
  };

  return (
    <div style={styles.cart}>
      <main style={styles.main}>
        <h1 style={styles.cartTitle}>Your Shopping Cart</h1>
        <hr style={styles.hr} />
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              qty={item.qty}
              imgg={item.imgSrc}
              increment={increment}
              decrement={decrement}
              delhandler={deletee}
            />
          ))
        ) : (
          <h2>No Items Yet!</h2>
        )}
        <button onClick={handlePayment} style={styles.paymentButton}>Proceed to pay</button>
      </main>

      <aside style={styles.aside}>
        <h1 style={styles.priceTitle}>Price Details</h1>
        <div style={styles.priceDetail}>
          <h2 style={styles.detailText}>Subtotal: Rs. {Subtotal}</h2>
          <hr style={styles.hr} />
        </div>
        {/* <div style={styles.priceDetail}>
          <h2 style={styles.detailText}>Shipping: Rs. {Shipping}</h2>
          <hr style={styles.hr} />
        </div> */}
        <div style={styles.priceDetail}>
          <h2 style={styles.detailText}>Tax: Rs. {Tax}</h2>
          <hr style={styles.hr} />
        </div>
        <div style={styles.totalAmount}>
          <h2 style={styles.totalText}>Total: <span style={styles.boldText}>Rs. {Total}</span></h2>
        </div>
      </aside>
    </div>
  );
};

const CartItem = ({ id, imgg, name, price, qty, increment, decrement, delhandler }) => {
  return (
    <div style={styles.cartItem}>
      <img src={imgg} alt={name} style={styles.cartItemImage} />
      <article style={styles.cartItemDetails}>
        <p style={styles.cartItemName}>{name}</p>
        <h3 style={styles.cartItemPrice}>Rs. {price}</h3>
      </article>
      <div style={styles.cartItemActions}>
        <button onClick={() => increment(id)} style={styles.cartItemButton}>+</button>
        <p>{qty}</p>
        <button onClick={() => decrement(id)} style={styles.cartItemButton}>-</button>
      </div>
      <AiFillDelete onClick={() => delhandler(id)} style={styles.deleteIcon} />
    </div>
  );
};

const styles = {
  cart: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: '20px',
    flexDirection: 'row',
  },
  main: {
    flex: 2,
    padding: '20px',
  },
  aside: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    marginLeft: '20px',
  },
  cartTitle: {
    fontSize: '28px',
    color: '#444',
    marginBottom: '10px',
  },
  priceTitle: {
    fontSize: '24px',
    color: '#777',
    marginBottom: '10px',
    fontFamily: 'Roboto, sans-serif',
  },
  detailText: {
    fontFamily: 'Roboto, sans-serif',
  },
  hr: {
    borderTop: '1px solid #ddd',
    margin: '10px 0',
  },
  totalAmount: {
    border: '2px dashed #000',
    padding: '10px',
    borderRadius: '8px',
  },
  totalText: {
    fontFamily: 'Roboto, sans-serif',
  },
  boldText: {
    fontWeight: 'bold',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '8px',
    height: '144px',
  },
  cartItemImage: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  cartItemDetails: {
    marginLeft: '20px',
    flex: 1,
  },
  cartItemName: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  cartItemPrice: {
    marginBottom: '10px',
  },
  cartItemActions: {
    display: 'flex',
    alignItems: 'center',
  },
  cartItemButton: {
    padding: '5px 10px',
    margin: '0 5px',
    border: 'none',
    backgroundColor: '#ddd',
    cursor: 'pointer',
  },
  deleteIcon: {
    color: '#ff0000',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  paymentButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Cart;
