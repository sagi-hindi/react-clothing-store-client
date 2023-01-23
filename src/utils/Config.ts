class Config{

}

class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public getUserCart = "http://localhost:3001/api/cart/find/";
    public getAllProducts = "http://localhost:3001/api/products";
    public getOneProduct = "http://localhost:3001/api/products/";
    public ProductImageUrl = "http://localhost:3001/api/products/images/";
    public deleteCartProduct = "http://localhost:3001/api/cart/delete/";
    public createCart = "http://localhost:3001/api/cart/create/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public login = "http://localhost:3001/api/auth/login/";
}

class ProductionConfig extends Config {
    public isDevelopment = false;
    public getUserCart = "https://s-a-c-s-api.onrender.com/api/cart/find/";
    public getAllProducts = "https://s-a-c-s-api.onrender.com/api/products";
    public getOneProduct = "https://s-a-c-s-api.onrender.com/api/products/";
    public createCart = "https://s-a-c-s-api.onrender.com/api/cart/create/";
    public deleteCartProduct = "https://s-a-c-s-api.onrender.com/api/cart/delete/";
    public ProductImageUrl = "https://s-a-c-s-api.onrender.com/api/products/images/";
    public registerUrl = "https://s-a-c-s-api.onrender.com/api/auth/register/";
    public login = "https://s-a-c-s-api.onrender.com/api/auth/login/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig() ;


export default config