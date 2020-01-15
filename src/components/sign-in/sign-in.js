import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.setState = ({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState = ({[name]: value})
        console.log(name)
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' 
                        name='email' 
                        handleChange={this.handleChange}
                        value={this.state.value}
                        label='Email'
                        required/>
                    <FormInput type='password' 
                        name='password' 
                        handleChange={this.handleChange}
                        value={this.state.value}
                        label='Password'
                        required/>
                    <div className='sign-in__btn-group'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

