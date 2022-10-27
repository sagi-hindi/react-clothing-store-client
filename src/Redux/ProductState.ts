import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductModel } from '../models/product.model';


export interface ProductState {
    products: ProductModel[];
    isFetching: boolean;
    error: boolean;
  };

  const initialState: ProductState = {
    products: [],
    isFetching: false,
    error: false,
};


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        allProductsStart: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        allProductsSuccess: (state,  action: PayloadAction<any>) => {
            state.isFetching = false;
            state.products = action.payload;
            state.error = false;
        },
        allProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    },
})

export const { allProductsStart,  allProductsSuccess, allProductFailure} = productSlice.actions


export default productSlice.reducer;