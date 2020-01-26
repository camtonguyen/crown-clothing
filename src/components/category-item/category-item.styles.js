import styled from 'styled-components';

export const CategoryItemContainer = styled.div`
    height: ${({size}) => (size ? '380px' : '240px') };
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;

        .bg-img {
          transform: scale(1.1);
          transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        .content {
          opacity: 0.9;
        }
    }
`;

export const CategoryItemBg = styled.div`
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    background-image: ${( {imageUrl} ) => `url(${imageUrl})`}
`;

export const CategoryItemContent = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: #fff;
    opacity: .7;
    position: absolute;
`;

export const CategoryItemTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
`;

export const CategoryItemSubTitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;