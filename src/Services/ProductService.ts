import { ProductModel } from './../models/product.model';
import axios from "axios";
import {store} from "../Redux/Store";
import { allProductFailure, allProductsStart, allProductsSuccess } from "../Redux/ProductState";
import { CartModel } from '../models/cart.model';
import { deleteCartItem } from '../Redux/CartState';
import config from '../utils/Config';



class ProductService{

    public async getProducts():Promise<ProductModel[]>{
        store.dispatch(allProductsStart());
        try{

            const res = await axios.get<ProductModel[]>(config.getAllProducts);
            store.dispatch(allProductsSuccess(res.data));
            return res.data;
        }catch{
            store.dispatch(allProductFailure());
        }

    }

    // public async deleteCartItem(cartItem:CartModel):Promise<void>{
    //     try{
    //         const res = await axios.get<ProductModel[]>("http://localhost:3001/api/products");
    //         // store.dispatch(deleteCartItem(cartItem));
    //     }catch{
    //         store.dispatch(allProductFailure());
    //     }

    // }


}

const productService = new ProductService()

export default productService;

function allProductSuccess(data: ProductModel[]): any {
    throw new Error('Function not implemented.');
}
