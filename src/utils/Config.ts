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
    public getUserCart = "https://clothing-store-sa.herokuapp.com/api/cart/find/";
    public getAllProducts = "https://clothing-store-sa.herokuapp.com/api/products";
    public getOneProduct = "https://clothing-store-sa.herokuapp.com/api/products/";
    public createCart = "https://clothing-store-sa.herokuapp.com/api/cart/create/";
    public deleteCartProduct = "https://clothing-store-sa.herokuapp.com/api/cart/delete/";
    public ProductImageUrl = "https://clothing-store-sa.herokuapp.com/api/products/images/";
    public registerUrl = "https://clothing-store-sa.herokuapp.com/api/auth/register/";
    public login = "https://clothing-store-sa.herokuapp.com/api/auth/login/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig() ;


export default config