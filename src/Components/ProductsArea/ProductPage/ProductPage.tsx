import { Add, Remove } from "@mui/icons-material";
import Footer from "../../HomeArea/footer/footer";
import Navbar from "../../HomeArea/Navbar/Navbar";
import Newsletter from "../../PromotionArea/Newsletter/Newsletter";
import Promotion from "../../PromotionArea/Promotion/Promotion";
import { AddContainer, Amount, AmountContainer, Button, Container, Description, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Img, ImgContainer, InfoContainer, Price, Title, Wrapper } from "./ProductPage.styled";
import { useParams } from "react-router-dom";
import { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { ProductModel } from "../../../models/product.model";
import cartService from "../../../Services/CartService";
import notify from "../../../Services/NotifyService";
import { useAppSelector } from "../../../Redux/Store";
import config from "../../../utils/Config";

function ProductPage(): JSX.Element {
    const { _id } = useParams<string>()
    const [product,setProduct] = useState<ProductModel>() 
    const [quantity,setQuantity] = useState<number>(1) 
    const [color,setColor] = useState<string>() 
    const [size,setSize] = useState<string>() 
    const user = useAppSelector(state => state.user.currentUser);

    

    useEffect(()=> {
        async function getProduct() {
        try{
            const product = await axios.get(`${config.getOneProduct}${_id}`);
            setProduct(product.data);
        }catch(e){
        console.log(e)
            }
        }
        getProduct()
    },[])

    function handleQuantity(action:string):void{
        if(action === 'dec'){
         quantity > 1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    }

    async function handleClick():Promise<void>{
        if(!user){
            notify.error("Please Login First")
        }
        if(!color){
            notify.error("Please pick a color")
            return;
        }
        if(!size){
            notify.error("Please pick a size")
            return;
        }
        else{
            console.log("hello")
            await cartService.addToCart({...product, quantity, color, size}) 
        }
    }

    function chooseColor(e:SyntheticEvent):void{
        const div = (e.target as HTMLDivElement).style.border = '2px solid teal'
        const colors = (e.target as HTMLDivElement).getAttribute("color")
        setColor(colors)
    }

    return (
        <Container>
            <Navbar/>
            <Promotion/>
            <Wrapper>
                <ImgContainer>
                {
                 product && <Img src={`${config.ProductImageUrl}${product?.imageName}`}/>
                }
                
                </ImgContainer>
                <InfoContainer> 
                    <Title>{product?.title}</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam praesentium ex ratione ipsa 
                        esse voluptate dolorum! Officia quidem, explicabo temporibus voluptatem autem neque, 
                        ea vitae aliquam fugit illo excepturi velit.</Description>
                    <Price>${product?.price}</Price>
                    <FilterContainer>
                        <Filter >
                            <FilterTitle>Color:</FilterTitle>
                            {product?.color.map(c =>{
                                return <FilterColor onClick={chooseColor} key={c}  color={c}></FilterColor>
                            })}
                        </Filter>
                        <Filter>
                        <FilterTitle>Size:</FilterTitle>
                            <FilterSize defaultValue="choose" onChange={(e)=> setSize(e.target.value)}>
                                <FilterSizeOption value="choose" disabled>Choose Size</FilterSizeOption>
                            {product?.size.map(s =>{
                                return <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            })}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity('dec')}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity('inc')}/>
                        </AmountContainer>
                    <Button  onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer> 
            </Wrapper>
            <Newsletter/>
            <Footer/>

        </Container>

    );
}

export default ProductPage;
