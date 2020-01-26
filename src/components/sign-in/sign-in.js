import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { 
    SignInConatainer, 
    ButtonGroup 
} from './sig-in.styles';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch(error) {
            console.error(error)
        }
        
        this.setState = ({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const { email, password} = this.state;
        return(
            <SignInConatainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
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
                    <ButtonGroup>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonGroup>
                </form>
            </SignInConatainer>
        )
    }
}

export default SignIn;

