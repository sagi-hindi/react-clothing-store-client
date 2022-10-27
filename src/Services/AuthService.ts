import axios from "axios";
import { store} from "../Redux/Store";
import { CredentialsModel } from "../models/credentials.model";
import { clearResults, loginFailure, loginStart, loginSuccess, UserState, } from "../Redux/AuthState";
import { clearCartResults, updateCart } from "../Redux/CartState";
import { UserModel } from "../models/user.model";
import config from "../utils/Config";


class AuthService{

    public async login(user:CredentialsModel):Promise<void>{
        store.dispatch(loginStart());
        try{
            const res = await axios.post<UserModel>(config.login, user);
             store.dispatch(loginSuccess(res.data));
             const cart = await axios.get(config.getUserCart + res.data._id);
             console.log(cart.data)
            if(cart.data){
                console.log("hello")
                store.dispatch(updateCart(cart.data))
            }
        }catch{
             store.dispatch(loginFailure());
        }

    }
    public async logout():Promise<void>{
        try{
         store.dispatch(clearCartResults())
         store.dispatch(clearResults())
         
        }catch{
            alert("error")
        }
    }
}


const authService = new AuthService()

export default authService;