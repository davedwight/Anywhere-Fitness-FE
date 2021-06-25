import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Profile from './components/Profile';
import SignUp from './components/Signup';
import Onboarding from './components/Onboarding';
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
      <div className="App"> 
        <Header isAuth={state.isAuth} setAuth={setState} />
      

          <PrivateRoute
            isAuth={state.isAuth}
            exact path='/profile'
            component={Profile}
          />

          <Route path='/signup'>
            <SignUp setAuth={setState} />
          </Route>

          <Route path='/onboarding' component={Onboarding} />

          <Route path='/search-classes'>
            <SearchClasses />
          </Route>

          <Route path='/search-punchpasses'>
            <SearchPunchpasses />
          </Route>

          <Route path='/login'>
            {state.isAuth ? <Redirect to='/profile' /> : <Login setAuth={setState} />}
          </Route>

          <Route exact path='/'>
            {state.isAuth ? <Redirect to='/profile' /> : <Login setAuth={setState} />}
          </Route>
        
      </div>
  );
}

export default App;
