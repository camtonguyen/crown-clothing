import React from  'react';

import { SignInAndSignUp } from './signin-and-signup.styles';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SigninAndSignupPage = () => (
    <SignInAndSignUp>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUp>
);

export default SigninAndSignupPage;