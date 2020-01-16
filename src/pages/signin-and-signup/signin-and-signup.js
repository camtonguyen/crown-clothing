import React from  'react';

import './signin-and-signup.scss';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SigninAndSignupPage = () => (
    <main className='main sigin-and-signup'>
        <SignIn/>
        <SignUp/>
    </main>
);

export default SigninAndSignupPage;