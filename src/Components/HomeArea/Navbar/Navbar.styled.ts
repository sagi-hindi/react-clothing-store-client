import styled from 'styled-components';


export const Container = styled.div`
    height: 60px;
    @media only screen and (max-width: 412px) {
        height: 60px;
    }
`;


export const Wrapper = styled.div`
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 412px) {
        padding:0px;

    }

`;

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    @media only screen and (max-width: 412px) {
        display: none;
    }
`;

export const Input = styled.input`
    border: none;
    @media only screen and (max-width: 412px) {
        width: 50px;
    }
`;

export const Logo = styled.h1`
    font-weight:700;
    cursor: pointer;
    @media only screen and (max-width: 412px) {
        font-size: 24px;
    }
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    @media only screen and (max-width: 412px) {
        font-size: 12px;
        margin-left: 10px;

    }
`;


export const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;


export const Left = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
`;

export const Center = styled.div`
    text-align: center;
    flex: 1;
`;

export const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    @media only screen and (max-width: 412px) {
        justify-content: center;
        flex: 2;

    }
`;

export const Link = styled.a`


`;