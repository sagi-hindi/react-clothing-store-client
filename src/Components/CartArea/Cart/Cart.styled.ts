import styled from 'styled-components';



interface Props{
   readonly border?:string;
   readonly color?:string;
   readonly total?:string;
}

export const Container = styled.div`
    max-width: 100vw;
`;

export const Wrapper = styled.div`
    padding: 20px;
@media only screen and (max-width: 412px) {
    padding: 10px;  
}

`;

export const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

export const TopTexts = styled.div`
@media only screen and (max-width: 412px) {
    display: none;  
}
`;

export const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;

`;

export const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;



export const TopButton = styled.button<Props>`
margin: 0px;
padding:10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.border === "filled" && "none"};
background-color: ${props => props.border === "filled" ? "black" : 'transparent'};
color: ${props => props.border === "filled" && "white"};
`;

export const Bottom = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 412px) {
    flex-direction: column;  
}
`;

export const Info = styled.div`
flex:3;


`;
export const Hr = styled.hr`
background-color: #eee;
border:none;
height: 1px;

`;


export const Product = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 412px) {
    flex-direction: column;  
}
`;

export const ProductDetail = styled.div`
flex:2;
display: flex;
`;


export const Image = styled.img`
 width: 200px;
 height: 200px;
 
 `;


export const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;


`;

export const ProductName = styled.span`

`;
export const ProductId = styled.span`

`;
export const ProductColor = styled.div<Props>`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${props => props.color};
`;
export const ProductSize = styled.span`

`;

export const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const ProductPrice = styled.div`
font-size: 30px;
font-weight: 500;
@media only screen and (max-width: 412px) {
margin-bottom: 10px
}

`;
export const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`;

export const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
@media only screen and (max-width: 412px) {
   margin: 5px 10px;  
}


`;


export const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 40vh;
`;

export const SummaryTitle = styled.h1`
font-weight: 200;


`;
export const SummaryItem = styled.div<Props>`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-size: ${props => props.total === "total" && '25px'};
font-weight: ${props => props.total === "total" && '600'};

`;
export const SummaryItemText = styled.span`
`;

export const SummaryItemPrice = styled.span`

`;

export const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color:black;
color:white;
font-weight: 600;
`;

export const DeleteButton = styled.button`

`;






