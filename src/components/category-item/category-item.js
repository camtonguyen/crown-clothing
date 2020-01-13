import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-item.scss';

const CategoryItem = ({title, imageUrl, size, history, match,  linkUrl}) => (
    <div className={`${size} category__item`} 
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='category__item-bg'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='category__item-content'>
            <h1 className='category__item-title'>{title}</h1>
            <span className='category__item-subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(CategoryItem);
