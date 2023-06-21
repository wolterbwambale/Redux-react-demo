import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feaures/cart/cartSlice'


export const store=configureStore({
    reducer:{
        cart: cartReducer,

    },

});