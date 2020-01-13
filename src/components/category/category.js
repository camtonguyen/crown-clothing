import React from 'react';

import CategoryItem from '../category-item/category-item';
import SECTION_DATA from './category.data';

import './category.scss';

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            sections : SECTION_DATA
        }
    }

    render() {
        return(
            <div className='category'>
                {
                    this.state.sections.map(({id, ...otherSectionProps }) => (
                        <CategoryItem key={id} 
                                    {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Category;
