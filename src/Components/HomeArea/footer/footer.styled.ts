import styled from 'styled-components';

interface BackgroundColor {
    readonly bg: string;
  }

export const Container = styled.div`
display: flex;
@media only screen and (max-width: 412px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
padding: 20px;

`;

export const Center = styled.div`
flex: 2;
padding: 20px;
@media only screen and (max-width: 412px) {
        display: none;
    }

`;

export const Right = styled.div`
flex: 1;
padding: 20px;
@media only screen and (max-width: 412px) {
  background-color: #E8E8E8;
    }

`;

export const Description = styled.p`
padding-bottom: 30px;
width: 85%;

`;

export const Logo = styled.h1`
font-weight: 900;
margin-bottom: 0;
`;

export const Title = styled.h3`
margin-bottom: 30px;

`;
export const ContactItem = styled.div`
margin-bottom:10px;
display: flex;
align-content: center;
`;

export const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;


`;
export const ListItem = styled.li`
width:50%;
margin-bottom:10px;

`;


export const SocialContainer = styled.div`
display: flex;


`;
export const Payment = styled.img`
width:50%;
height: auto;
object-fit: cover;

`;

export const SocialIcon = styled.div<BackgroundColor>`
width: 40px;
height: 40px;
border-radius: 50px;
color: white;
background-color: #${props => props.bg};
margin-right: 20px;
justify-content: center;
align-items: center;
flex-direction: row;

`;

