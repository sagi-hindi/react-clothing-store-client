import "./Categories.styled.ts";
import { Container } from "./Categories.styled";
import {categories } from "../../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

function Categories(): JSX.Element {
    return (
        <Container>
            {categories.map(item => 
                <CategoryItem key={item._id} item={item}/>
            )}
        

        </Container>
			
    );
}

export default Categories;
