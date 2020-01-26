import styled, { css } from 'styled-components';

const DefaultButtonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid transparent;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const GoogleButtonStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: white;
        color: #4285f4;
        border: 1px solid #4285f4;
    }
`;

const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return GoogleButtonStyles;
    }
    return props.inverted ? InvertedButtonStyles : DefaultButtonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    transition: all .2s ease-in;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;