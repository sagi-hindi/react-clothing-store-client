import { SyntheticEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../HomeArea/footer/footer";
import Navbar from "../../HomeArea/Navbar/Navbar";
import Newsletter from "../../PromotionArea/Newsletter/Newsletter";
import Promotion from "../../PromotionArea/Promotion/Promotion";
import Products from "../Products/Products";
import { Container, Filter, FilterContainer, FilterText, Select, Title, Option } from "./ProductList.styled";

interface handleFilter{
    color?: string;
}
interface handleSort{
    sort?:string
}


function ProductList(): JSX.Element {
    
    let [searchParams, setSearchParams] = useSearchParams();
    let category = searchParams.get("category")
    
    const [filters, setFilters] = useState<handleFilter>({});
    
    const [sort, setSort] = useState<handleSort>({});
    
    const handleFilters = (event:SyntheticEvent):void => {
        let { name, value } = event.target as HTMLSelectElement;
        setFilters({...filters, [name]: value.toLowerCase()});
    };

    const handleSort = (event:SyntheticEvent):void => {
        let { name, value } = event.target as HTMLSelectElement;
        setSort({...sort, [name]: value});
    };
    console.log(filters)

    return (
        <Container>
            <Navbar/>
            <Promotion/>
            <Title>Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled >Color:</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort By:</FilterText>
                    <Select name="sort" onChange={handleSort}>
                    <Option value="newest">Newest:</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc"> Price (desc)</Option>
                </Select>

                </Filter>
            </FilterContainer>
            <Products cat={category} filters={filters} sort={sort.sort}/>
            <Newsletter/>
            <Footer/>


        </Container>

    );
}

export default ProductList;
function useQuery(): { category: any; } {
    throw new Error("Function not implemented.");
}

