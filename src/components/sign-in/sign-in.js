import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { 
    SignInConatainer, 
    ButtonGroup 
} from './sig-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        email: '', 
        password: ''
    });
    
    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password );
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value})
    }

    return(
        <SignInConatainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type='email' 
                    name='email' 
                    handleChange={handleChange}
                    value={email}
                    label='Email'
                    required/>
                <FormInput type='password' 
                    name='password' 
                    handleChange={handleChange}
                    value={password}
                    label='Password'
                    required/>
                <ButtonGroup>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton 
                        type='button' 
                        onClick={googleSignInStart} 
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonGroup>
            </form>
        </SignInConatainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);

