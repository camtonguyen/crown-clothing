import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer } from './sign-up.styles'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;
        if(password !== confirmPassword) {
            alert("Password doesn't match!")
        }
        signUpStart({displayName, email, password});
        
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpContainer>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='text' 
                            name='displayName' 
                            handleChange={this.handleChange}
                            value={displayName}
                            label='Display Name'
                            required/>
                    <FormInput type='email' 
                        name='email' 
                        handleChange={this.handleChange}
                        value={email}
                        label='Email'
                        required/>
                    <FormInput type='password' 
                        name='password' 
                        handleChange={this.handleChange}
                        value={password}
                        label='Password'
                        required/>
                    <FormInput type='password' 
                        name='confirmPassword' 
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        label='Confirm Password'
                        required/>
                    <CustomButton type='submit'>sign up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }

};

const mapDisPatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDisPatchToProps)(SignUp);