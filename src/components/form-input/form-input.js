import React from 'react';

import './form-input.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='form-group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ? 
                (<label className='form-label'>
                    {label}
                </label>) 
            : null
        }
    </div>
);

export default FormInput;