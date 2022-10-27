import { Center, ContactItem, Container, Description, Left, List, ListItem, Logo, Payment, Right, SocialContainer, SocialIcon, Title } from "./footer.styled";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import paymentImg from '../../../assets/images/payment.jpg';

function Footer(): JSX.Element {
    return (
			<Container>
        <Left>
            <Logo>S.A.C.S</Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam incidunt hic 
                expedita sapiente maxime repellat eum ea obcaecati quasi optio deserunt accusantium possimus ad quia 
                architecto nam, impedit assumenda?
            </Description>
            <SocialContainer>
                <SocialIcon bg="3b5999"><FacebookIcon/></SocialIcon>
                <SocialIcon bg="E4405f"><InstagramIcon/></SocialIcon>
                <SocialIcon bg="55acee"><TwitterIcon/></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
        <Title>Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
            <LocationOnIcon style={{marginRight: '10px'}}/> 15 Kanfei Nesharim St. Jerusalem
            </ContactItem>
            <ContactItem>
           <LocalPhoneIcon style={{marginRight: '10px'}}/> +1 23456 789
            </ContactItem>
            <ContactItem>
            <EmailIcon style={{marginRight: '10px'}} /> contact@sacs.dev
            </ContactItem>
            <Payment src={paymentImg}/>

        </Right>
                
            </Container>
    );
}

export default Footer;
