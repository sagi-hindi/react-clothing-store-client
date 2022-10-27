import styled from 'styled-components';

export const Info = styled.div`
opacity: 0;
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
background-color: rgba(0,0,0,0.1);
display: flex;
align-items: center;
justify-content: center;


`;

export const Container = styled.div`
flex: 1 0 21%;
margin: 5px;
height: 450px;
width: 280px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fcff   ;
position: relative;

&:hover ${Info}{
    opacity: 1;

}


`;

export const Circle = styled.div`
width:200px;
height:200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

export const Img = styled.img`
height:75%;
z-index: 2;

`;

export const Link = styled.a`
`;



export const Icon = styled.div`
width:40px;
height:40px;
background-color: white;
border-radius: 50%;
display:flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
    cursor: pointer;

}
`;



