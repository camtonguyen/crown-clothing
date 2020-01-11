import React from 'react';

import './category-item.scss';

const CategoryItem = ({title, imageUrl, size}) => (
    <div className={`${size} category__item`}>
        <div className='category__item-bg'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        ></div>
        <div className='category__item-content'>
            <h1 className='category__item-title'>{title}</h1>
            <span className='category__item-subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default CategoryItem;
