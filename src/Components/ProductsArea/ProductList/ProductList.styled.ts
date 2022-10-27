import styled from 'styled-components';



export const Container = styled.div`

`;
export const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`;
export const Filter = styled.div`
margin: 20px;
@media only screen and (max-width: 412px) {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
}

`;

export const Title = styled.h1`
@media only screen and (max-width: 412px) {
    display: flex;
    justify-content: center;
    align-items: center;
}

`;

export const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
@media only screen and (max-width: 412px) {
    margin-right: 0;

}


`;
export const Select = styled.select`
padding: 10px;
margin-right: 20px;
@media only screen and (max-width: 412px) {
    width:130px;
    margin: 10px 0px;

}


`;
export const Option = styled.option`

`;
