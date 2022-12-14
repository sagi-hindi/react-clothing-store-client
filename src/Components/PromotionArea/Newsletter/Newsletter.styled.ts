import styled from 'styled-components';


export const Container = styled.div`
height: 60vh;
background-color: #f5fcff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;

`;

export const Description = styled.div`
font-size: 24px;
font-weight: 300px;
margin-bottom: 20px;
@media only screen and (max-width: 412px) {
        text-align: center;

    }

`;

export const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
@media only screen and (max-width: 412px) {
        width: 80%;
    }

`;

export const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;
`;
export const Button = styled.button`
flex:1;
border: none;
background-color: teal;
color:white



`;
