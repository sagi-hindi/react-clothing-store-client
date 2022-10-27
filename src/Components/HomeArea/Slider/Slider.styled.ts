import styled from 'styled-components';

interface NewProps {
    readonly direction: string;
  }

  interface Props {
    readonly bg:string;
  }

  interface slideIndex {
    readonly slideIndex:number;
  }

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
@media only screen and (max-width: 412px) {
        display: none;

    }

`;


export const Arrow = styled.div<NewProps>`
width: 50px;
height: 50px;
background-color: gray;
border-radius: 50%;
display:flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.3;
z-index: 2;
`;

export const Wrapper = styled.div<slideIndex>`
display: flex;
height: 100%;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);

`;

export const Slide = styled.div<Props>`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`;

export const ImageContainer = styled.div`
height:100%;
margin: auto;
display: flex;
justify-content: center;
flex: 1;
`;

export const Image = styled.img`
height: 80%;
`;


export const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

export const Title = styled.h1`
font-size: 70px;

`;

export const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;


`;

export const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;
