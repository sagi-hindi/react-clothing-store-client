import styled from 'styled-components';


export const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;


`;

export const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
@media only screen and (max-width: 390px) {
        height: 30vh;
        flex: 2;

    }
`;
export const Info = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;


`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;


`;

export const Button = styled.button`
border: none;
  cursor: pointer;
  padding:10px;
  background-color: white;
  font-weight: 700;
  color: #888888	;

`;



