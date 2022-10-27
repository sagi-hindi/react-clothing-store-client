import { Container } from "./ProductsListHome.styled";
import "./ProductsListHome.styled.ts";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../models/product.model";
import productService from "../../../Services/ProductService";


function ProductsListHome(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>();
    const [filtersProducts, setFilteredProducts] = useState<ProductModel[]>(products);
    



    useEffect( () => {
        async function getProducts():Promise<void>{
            try{
            const products = await productService.getProducts()
                setProducts(products);
            }catch(e){
                console.log(e);
            }
        }
        getProducts()
    },[]);

    
    return (
        <Container>
            {products?.slice(0,8).map(item =>
                <ProductCard key={item._id} item={item}/>
               )}

        </Container>

    );
}

export default ProductsListHome;
