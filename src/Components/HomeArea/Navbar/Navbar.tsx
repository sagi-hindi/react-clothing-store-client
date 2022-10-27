import { Search } from "@mui/icons-material";
import { Center, Container, Language, Left, Right, SearchContainer, Wrapper, Input, Logo, MenuItem, Link } from "./Navbar.styled";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAppSelector } from "../../../Redux/Store";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";



function Navbar(): JSX.Element {

    const quantity = useAppSelector(state => state.cart.quantity);
    const user = useAppSelector(state => state.user.currentUser);
    const navigate = useNavigate();
    

async function logout():Promise<void>{
   await authService.logout();
   navigate("/");
}

function navHome():void{
    navigate("/");
}


    return (    
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:'gray', fontSize: '17px' }}/>
                    </SearchContainer>
                    </Left>
                <Center>
                    <Logo onClick={navHome}>
                        S.A.C.S
                    </Logo>
                </Center>
                <Right>

         {   user ? <> <MenuItem>Hello {user.username}</MenuItem>
                    <MenuItem onClick={logout}>LOGOUT</MenuItem>
                    </>
                :
                <>
                    <NavLink to={"/register"}>
                    <MenuItem>REGISTER</MenuItem>
                </NavLink>
                <NavLink to={"/login"}>
                    <MenuItem>SIGN IN</MenuItem>
                </NavLink> </> }
                    <NavLink to={"/cart"}>
                    <MenuItem>              
        <Badge color="secondary" badgeContent={quantity}>
            <ShoppingCartOutlinedIcon />
                   </Badge>
                    </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>      
        </Container>
    );
}

export default Navbar;
