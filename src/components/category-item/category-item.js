import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
    CategoryItemContainer, 
    CategoryItemBg, 
    CategoryItemContent, 
    CategoryItemTitle, 
    CategoryItemSubTitle 
} from './category-item.styles';

const CategoryItem = ({title, imageUrl, size, history, match,  linkUrl}) => (
    <CategoryItemContainer size={size}
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <CategoryItemBg className='bg-img'
            imageUrl={imageUrl}
        />
        <CategoryItemContent className='content'>
            <CategoryItemTitle>{title}</CategoryItemTitle>
            <CategoryItemSubTitle>SHOP NOW</CategoryItemSubTitle>
        </CategoryItemContent>
    </CategoryItemContainer>
);

export default withRouter(CategoryItem);
