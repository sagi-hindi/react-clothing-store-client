import { Delete } from "@mui/icons-material";
import { useAppSelector } from "../../../Redux/Store";
import Footer from "../../HomeArea/footer/footer";
import Navbar from "../../HomeArea/Navbar/Navbar";
import Newsletter from "../../PromotionArea/Newsletter/Newsletter";
import Promotion from "../../PromotionArea/Promotion/Promotion";
import {Bottom, Container, Info, Product, ProductDetail, Summary, Title, Top, TopButton, TopText, TopTexts, Wrapper, Image, Details, ProductName, ProductId, ProductPrice, ProductColor, ProductSize, PriceDetail, ProductAmountContainer, ProductAmount, Hr, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, SummaryButton, DeleteButton} from  "./Cart.styled";
import { NavLink } from "react-router-dom";
import { CartModel } from "../../../models/cart.model";
import cartService from "../../../Services/CartService";
import config from "../../../utils/Config";

const KEY = process.env.REACT_APP_STRIPE;

function Cart(): JSX.Element {
    const cart = useAppSelector(state => state.cart);

    async function deleteItem(p:CartModel):Promise<void>{
       await cartService.deleteCartItem(p)
    }

    return (
        <Container>
            <Navbar/>
            <Promotion/>
            <Wrapper>
                <Title>YOUR CART</Title> 
                <Top>
                <NavLink to={`/home`}>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    </NavLink>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton border="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                    {cart.products.map((product, index) => (  
                    <Product key={index}>
                            <ProductDetail>
                                <DeleteButton onClick={()=>{deleteItem(product)}}>
                                <Delete/>
                                </DeleteButton>
                                <Image src={config.ProductImageUrl + product?.imageName}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product?.title}</ProductName>
                                    <ProductId><b>ID:</b> {product?._id}</ProductId>
                                    <ProductColor color={product?.color}/>
                                    <ProductSize><b>Size:</b> {product?.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <ProductDetail>
                                <PriceDetail>
                                <ProductPrice>${product?.price * product?.quantity}</ProductPrice>
                                </PriceDetail>
                            </ProductDetail>
                        </Product>))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>${cart?.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem total="total">
                            <SummaryItemText  >Total</SummaryItemText>
                            <SummaryItemPrice>${cart?.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter/>
            <Footer/>
           
        </Container>
    );
}

export default Cart;
