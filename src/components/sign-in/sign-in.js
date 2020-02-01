import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password );
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const { email, password} = this.state;
        const { googleSignInStart } = this.props;
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);

