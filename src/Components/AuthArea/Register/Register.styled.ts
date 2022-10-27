import styled from 'styled-components';
import imageBackground from '../../../assets/images/background-5.jpg';


export const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.1),
    rgba(255,255,255,0.5)
    ),
    url(${imageBackground}) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color:white;
@media only screen and (max-width: 412px) {
    width: 75%; 
}


`;
export const Title = styled.h1`
display: flex;
margin: 0px 10px 0px 0px;
font-size: 24px;
font-weight: 600;
justify-content: center;
border:1px solid teal;
padding: 5px;

`;
export const Form  = styled.form`
display: flex;
flex-wrap:wrap;

`;
export const Input  = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;


`;
export const Agreement  = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
export const Button  = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor: pointer;
@media only screen and (max-width: 412px) {
    width: 100%; 
}

`;