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
width: 25%;
background-color:white ;
@media only screen and (max-width: 412px) {
    width: 75%; 
}


`;
export const Title = styled.h1`
font-size: 24px;
font-weight: 600;
margin: 0px 0px 10px 0px;

`;
export const Form  = styled.form`
display: flex;
flex-direction: column;

`;

export const Input  = styled.input`
flex:1;
min-width: 40%;
margin: 5px 0px;
padding: 10px;
`;


export const Button  = styled.button`
width: 100%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor: pointer;
margin-bottom: 10px;
&:disabled{
    background-color: grey;
    cursor: not-allowed;
}

`;

export const Link  = styled.a`
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
`;
export const Error  = styled.span`
    color: red; 
    text-decoration: underline;
    font-size: 12px;
`;