import { ProductModel } from '../models/product.model';
import axios from "axios";
import {store} from "../Redux/Store";
import { allProductFailure, allProductsStart, allProductsSuccess } from "../Redux/ProductState";
import { CartModel } from '../models/cart.model';
import { addProduct, deleteCartItem } from '../Redux/CartState';
import config from "../utils/Config";




class CartService{

    public async addToCart(cartProduct:CartModel):Promise<void>{
        try{
            console.log(cartProduct)
            const cartItem = new CartModel(cartProduct._id, cartProduct.quantity, cartProduct.size, cartProduct.color, cartProduct.price*cartProduct.quantity)
            const res = await axios.post<ProductModel[]>(config.createCart, cartProduct);
            console.log(res.data);
            store.dispatch(addProduct(cartProduct))
    }catch{
            store.dispatch(allProductFailure());
        }

    }

    public async deleteCartItem(cartItem:CartModel):Promise<void>{
        try{
            await axios.delete<ProductModel[]>( config.deleteCartProduct + cartItem._id);
            store.dispatch(deleteCartItem(cartItem));
        }catch{
            store.dispatch(allProductFailure());
        }

    }


}

const cartService = new CartService()

export default cartService;
