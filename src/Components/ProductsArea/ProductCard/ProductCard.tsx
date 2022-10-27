import { Circle, Container, Icon, Img, Info, Link } from "./ProductCard.styled";
import "./ProductCard.styled.ts";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { ProductModel } from "../../../models/product.model";
import { NavLink } from "react-router-dom";
import config from "../../../utils/Config";


interface ProductProps{
    item:ProductModel;
}

function ProductCard({item}:ProductProps): JSX.Element {
    return (
        <Container>
            <Circle/>
            <Img src={`${config.ProductImageUrl}${item.imageName}`}/>
            <Info>
                <Icon>
                <NavLink to={"/Product/"+ item._id}>
                <ShoppingCartOutlinedIcon/>
                </NavLink>
                </Icon>
                <Icon>
                    <NavLink style={{color:"black"}} to={"/Product/"+ item._id}>
                <SearchOutlinedIcon/>
                </NavLink>
                </Icon>
                <Icon>
            <FavoriteOutlinedIcon/>
                </Icon>

            </Info>
        </Container>

    );
}

export default ProductCard;
