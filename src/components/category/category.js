import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCategorySections } from '../../redux/category/category.selectors';

import CategoryItem from '../category-item/category-item';

import './category.scss';

const Category = ({sections}) => (
    <div className='category'>
        {
            sections.map(({id, ...otherSectionProps }) => (
                <CategoryItem key={id} 
                            {...otherSectionProps}
                />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectCategorySections
});

export default connect(mapStateToProps)(Category);
