import styled from 'styled-components';



export const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
@media only screen and (max-width: 390px) {
        padding: 0px;
        margin: 0px;
        flex-direction: column;

    }
`;


