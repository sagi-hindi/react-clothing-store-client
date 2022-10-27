import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';


export interface CartState {
    products: CartModel[];
    quantity: number;
    total: number;
  };

  const initialState: CartState = {
    products: [],
    quantity: 0,
    total: 0,
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state,  action: PayloadAction<any>) => {
            state.quantity += 1;   
            state.products.push(action.payload);
            state.total += action.payload.price*action.payload.quantity;
    },
        updateCart: (state,  action: PayloadAction<any>) => {
            state.quantity = action.payload.products.length;;   
            state.products = action.payload.products;
            const total = action.payload.products.map((p:CartModel) =>(p.price*p.quantity));
            state.total = total.reduce((a:number,b:number) => a+=b);
            ;
    },
        deleteCartItem: (state,  action: PayloadAction<any>) => {
        const indexOfProduct = state.products.findIndex(p=>{
            return p._id === action.payload._id
        });
        if(indexOfProduct !== -1){
            state.products.splice(indexOfProduct, 1);
            state.quantity -= 1;
            state.total -= action.payload.price*action.payload.quantity;
        }
    },
    clearCartResults: (state) => {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
    },
    },
})

export const { addProduct, deleteCartItem, clearCartResults, updateCart } = cartSlice.actions

export default cartSlice.reducer;