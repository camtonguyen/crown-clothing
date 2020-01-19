import React from 'react';

import './custom-button.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`custom-button 
                        ${isGoogleSignIn ? 'google-button' : ''} 
                        ${inverted ? 'inverted' : ''}`} 
                        {...otherProps}>
        {children}
    </button>
)

export default CustomButton;