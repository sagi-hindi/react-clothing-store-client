import axios from "axios";
import {store} from "../Redux/Store";

class InterceptorsService {

public createInterceptors():void {
    axios.interceptors.request.use(request =>{
        if(store.getState().user.currentUser){
            request.headers = {
                authorization: "Bearer " + store.getState().user.currentUser.accessToken
        };
        }
        return request;
    });

    }

}
const interceptorsService = new InterceptorsService()
export default interceptorsService;