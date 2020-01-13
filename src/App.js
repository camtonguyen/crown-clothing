import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SigninAndSignupPage from './pages/signin-and-signup/signin-and-signup';

import Header from './components/header/header';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
