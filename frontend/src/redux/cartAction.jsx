// src/redux/cartActions.js
import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('addToCart');
export const incr = createAction('incr');
export const delFromCart=createAction('delFromCart');
export const removeFromCart=createAction('removeFromCart');
export const calculatePrice=createAction('calculatePrice');
export const addtolocalstorage=createAction('addtolocalstorage');