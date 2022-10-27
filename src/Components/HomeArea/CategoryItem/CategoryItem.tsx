import { NavLink } from "react-router-dom";
import { CategoryModel } from "../../../models/category.model";
import { Button, Container, Image, Info, Title } from "./CategoryItem.styled";
import "./CategoryItem.styled.ts";

interface CategoryItemProps {
    item: CategoryModel;	
}

function CategoryItem(props:CategoryItemProps): JSX.Element {


    return (
    <Container>
        <NavLink to={`/products?category=${props.item.category}`}>
        <Image src={require( `../../../assets/images/${props.item.img}`)}/>
        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP NOW!</Button>
        </Info>
        </NavLink>
    </Container>

    );
}

export default CategoryItem;
