import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePath, RegisterFormPath, ReviewFormPath} from './constants/PathConstants';
import Home from './components/home/Home';
import RegisterForm from './components/register-form/RegisterForm';
import ReviewForm from './components/review-form/ReviewForm';
import ErrorComponent from './common/error/ErrorComponent';


function App() {
  return (
<BrowserRouter>
  <Switch>
    <Route path={HomePath} component={Home} exact/>
    <Route path={RegisterFormPath} component={RegisterForm} />
    <Route path={ReviewFormPath} component={ReviewForm} />
    <Route component={ErrorComponent} />

  </Switch>
</BrowserRouter>
  );
}

export default App;
 