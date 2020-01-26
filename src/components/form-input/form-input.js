import React from 'react';

import { 
    FormGroupContainer, 
    FormInputContainer, 
    FormInputLabel 
} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <FormGroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        { label &&
                <FormInputLabel>{label}</FormInputLabel>
        }
    </FormGroupContainer>
);

export default FormInput;