import { Container } from "./Products.styled";
import "./Products.styled.ts";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../models/product.model";
import axios from "axios";
import config from "../../../utils/Config";


interface handleFilter{
    color?:string;
};

interface props {
    cat?: string;
    filters?:handleFilter;
    sort?:string
};

function Products({cat,filters,sort}:props): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>();
    const [filtersProducts, setFilteredProducts] = useState<ProductModel[]>(products);



    useEffect( () => {
        async function getProducts():Promise<void>{
            try{
                const response = await axios.get(cat ? `${config.getAllProducts}?category=${cat}` : `${config.getAllProducts}`);
                setProducts(response.data);

            }catch(e){
                console.log(e);
            }
        }
        getProducts()
    },[cat,filters]);


    useEffect( () => {
         filters && setFilteredProducts(
            products?.filter((item) => Object.entries(filters).every(([key, value]) => item[key as keyof handleFilter].includes(value))
        )
        )
    },[products,cat,filters]);    

    useEffect( () => {
        if(sort === 'newest'){
            setFilteredProducts((prev) => [...prev]?.sort((a,b) => a.createdAt > b.createdAt ? -1 : 1))
        }
        else if(sort === 'asc'){
            setFilteredProducts((prev)=> [...prev]?.sort((a,b) => a.price - b.price ))

        }else if(sort === 'desc'){
            setFilteredProducts((prev) => [...prev]?.sort((a,b) => b.price - a.price ))
        }

    },[sort]);


    return (
        <Container>
            { cat || filters ? filtersProducts?.map(item =>
             <ProductCard key={item._id} item={item}/>
            ) : products?.map(item =>
                <ProductCard key={item._id} item={item}/>
               )}

        </Container>

    );
}

export default Products;
