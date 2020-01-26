import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCategorySections } from '../../redux/category/category.selectors';

import CategoryItem from '../category-item/category-item';

import { CategoryContainer } from './category.styles';

const Category = ({sections}) => (
    <CategoryContainer>
        {
            sections.map(({id, ...otherSectionProps }) => (
                <CategoryItem key={id} 
                            {...otherSectionProps}
                />
            ))
        }
    </CategoryContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectCategorySections
});

export default connect(mapStateToProps)(Category);
