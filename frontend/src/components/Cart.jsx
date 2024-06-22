import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart ,delFromCart , removeFromCart , addtolocalstorage , calculatePrice } from '../redux/cartAction.jsx';

// src/redux/cartActions.js

const Cart = () => {

    const { cartItems , Subtotal , Shipping, Tax , Total} =  useSelector((state)=>state.cart) 

    const dispatch = useDispatch();

    const incrementt=(id)=>{
      dispatch(addToCart({ id })) ; dispatch(calculatePrice()); dispatch(addtolocalstorage());
    };

    const decrementt=(id)=>{
        dispatch(delFromCart(id)) ; dispatch(calculatePrice()); dispatch(addtolocalstorage());
    };

    const deletee=(id)=>{
        dispatch(removeFromCart({id})) ; dispatch(calculatePrice()); dispatch(addtolocalstorage());
    };
    
  return (

    <div className='cart'>
        
        <main>  
            {
                cartItems.length > 0 ? ( cartItems.map((item)=>( <CartItem key={item.id} id={item.id} name={item.name} price={item.price} qty={item.qty} imgg={item.imgSrc}  increment={incrementt} decrement={decrementt} delhandler={deletee}/>))) : <h1>No Items Yet! </h1>
            }

            <button>Proceed to pay</button>
        </main>

        <aside>
         
        <h2>Subtotal:${Subtotal}</h2>
        <h2>Shipping:${Shipping}</h2>
        <h2>Tax:${Tax}</h2>
        <h2>Total:${Total}</h2>
        
        </aside>
    </div>
  )
}

const CartItem=({id , imgg , name, price, qty ,increment , decrement , delhandler})=>{

    return <div className="cartItem">
        
        <img src={imgg} alt={name} />
     
        <article>
            <p>{name}</p>
            <h3>{price}</h3>
        </article>
        
        <div>
            <button onClick={()=>increment(id)}>+</button>
            <p>{qty}</p>
            <button onClick={()=>decrement(id)}>-</button>
        </div>
        <AiFillDelete onClick={()=>delhandler(id)}/>
    </div>
}

export default Cart