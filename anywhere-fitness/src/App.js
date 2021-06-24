import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Profile from './components/Profile';
import SignUp from './components/Signup';
import Onboarding from './components/Signup';
import SearchClasses from './components/SearchClasses';
import SearchPunchpasses from './components/SearchPunchpasses';

// import axiosWithAuth from './utils/axiosWithAuth';

import './App.css';

const initialValue = {
  isAuth: false
}

const App = () => {

  const [state, setState] = useState(initialValue);
 
  return (
    <Router>
      <div className="App"> 
        <Header isAuth={state.isAuth} setAuth={setState} />
      
        <Switch>

          <PrivateRoute
            isAuth={state.isAuth}
            exact path='/profile'
            component={Profile}
          />

          <Route exact path='/signup'>
            <SignUp setAuth={setState} />
          </Route>

          <Route exact path='/onboarding' component={Onboarding} />

          <Route exact path='search-classes'>
            <SearchClasses />
          </Route>

          <Route exact path='search-punchpasses'>
            <SearchPunchpasses />
          </Route>

          <Route path='/'>
            {state.isAuth ? <Redirect to='/profile' /> : <Login setAuth={setState} />}
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
