import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    button {
        width: 80%;
        opacity: .7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
      .collection-img {
        opacity: .8;
        cursor: pointer;
      }

      button {
        opacity: .8;
        display: flex;
      }
    }
`;

export const CollectionItemImg = styled.div`
    background-image: ${( {imageUrl} ) => `url(${imageUrl})`};
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: all .5s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const CollectionItemInfo = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    &:first-child {
        margin-bottom: 15px;
    }
`;