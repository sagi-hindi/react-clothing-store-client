import styled from 'styled-components';



interface Props{
    readonly color : string;
}

export const Container = styled.div`
width: 100%;
`;

export const Wrapper = styled.div`
padding: 50px;
display: flex;
@media only screen and (max-width: 412px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
}
`;

export const ImgContainer = styled.div`
flex:1;
`;

export const Img = styled.img`
width: 100%;
height: 80vh;
object-fit: cover;
@media only screen and (max-width: 412px) {
    height: 40vh;
}

`;

export const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
@media only screen and (max-width: 412px) {
    padding: 0px;

}

`;
export const Title = styled.h1`
font-weight: 600;
`;
export const Description = styled.p`
margin: 20px 0px;

`;
export const Price = styled.span`
font-weight: 300;
font-size: 30px;
`;

export const FilterContainer = styled.div`
width:50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: 300;
font-size: 30px;
@media only screen and (max-width: 412px) {
    width: 100%;

}

`;

export const Filter = styled.div`
display: flex;
align-items: center;




`;

export const FilterTitle = styled.div`
font-size: 25px;
font-weight: 500;
`;

export const FilterColor = styled.div<Props>`
width: 30px;
height: 30px;
margin-left: 10px;
border-radius: 50%;
background-color: ${props => props.color};
cursor: pointer;
&:active{
    border: 1px solid yellow;
}
@media only screen and (max-width: 412px) {
    width: 20px;
    height: 20px;
}

`;
export const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

export const FilterSizeOption = styled.option`


`;

export const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
@media only screen and (max-width: 412px) {
    width: 100%;
}

`;

export const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 800;
`;

export const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

export const Button = styled.button`
padding: 15px;
border: 1px solid teal;
background-color: white;
cursor: pointer;
font-weight: 600;

&:hover{
    background-color: teal;
    color: white;
}
`;

