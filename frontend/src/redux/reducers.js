import { createReducer } from "@reduxjs/toolkit";
import { addtolocalstorage , addToCart, calculatePrice, delFromCart , removeFromCart} from './cartAction'; 


const initialState = {
    
    cartItems : JSON.parse(localStorage.getItem('cartItems')) || [],
    Subtotal : localStorage.getItem('Subtotal') || 0,
    Shipping : localStorage.getItem('Shipping') || 0,
    Tax : localStorage.getItem('Tax') || 0,
    Total : localStorage.getItem('Total') || 0,
    
};
  
  export const CartReducer = createReducer(initialState, (builder) => {

    builder.addCase(addToCart, (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);
  
      if (isItemExist) {
        state.cartItems.forEach(i=>{
            if(i.id === item.id)
               i.qty+=1; 
        })
      } else {
        state.cartItems.push(item);
      }
  

    });

    builder.addCase(delFromCart, (state, action) => {
        const itemId = action.payload;
        
        state.cartItems.forEach(i=>{
            if(i.id === itemId)
                if(i.qty > 1)
                    i.qty-=1; 
        })
            
    });

    builder.addCase(removeFromCart,(state,action)=>{

        state.cartItems = state.cartItems.filter((item) =>item.id !== action.payload.id);
        
    });

    builder.addCase(calculatePrice,(state)=>{
    
        let sum=0;
        state.cartItems.forEach((i) => (sum += (i.price * i.qty)));
        state.Subtotal = sum;
        state.Shipping = 0;
        state.Tax = +(state.Subtotal * 0.18).toFixed();
        state.Total = state.Subtotal + state.Shipping + state.Tax;
        console.log(state.Subtotal);
        
    })

    builder.addCase(addtolocalstorage,(state)=>{
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('Subtotal', state.Subtotal);
        localStorage.setItem('Shipping', state.Shipping);
        localStorage.setItem('Tax', state.Tax);
        localStorage.setItem('Total', state.Total);
    })

  })
  