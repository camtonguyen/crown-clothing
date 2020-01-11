import React from 'react';

import './homepage.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='category'>
            <div className='category__item'>
                <div className='category__item-content'>
                    <h1 className='category__item-title'>HATS</h1>
                    <span className='category__item-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='category__item'>
                <div className='category__item-content'>
                    <h1 className='category__item-title'>JACKETS</h1>
                    <span className='category__item-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='category__item'>
                <div className='category__item-content'>
                    <h1 className='category__item-title'>SNEAKERS</h1>
                    <span className='category__item-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='category__item'>
                <div className='category__item-content'>
                    <h1 className='category__item-title'>WOMEN</h1>
                    <span className='category__item-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='category__item'>
                <div className='category__item-content'>
                    <h1 className='category__item-title'>MEN</h1>
                    <span className='category__item-subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;