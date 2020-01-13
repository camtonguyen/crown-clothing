import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

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
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;

