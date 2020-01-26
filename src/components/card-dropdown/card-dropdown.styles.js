import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button'; 

export const CardDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 0;
    z-index: 5;
`;

export const CardDropdownItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const CardDropdownEmptyMsg = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;