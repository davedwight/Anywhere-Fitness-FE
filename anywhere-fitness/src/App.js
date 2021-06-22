import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Profile from './components/Profile';

// import axiosWithAuth from './utils/axiosWithAuth';

import './App.css';

const initialValue = {
  isAuth: false
}

const App = () => {

  const [state, setState] = useState(initialValue);

  const history = useHistory();

  const handleLogout = () => {
    // delete this first setState and uncomment below when endpoint is setup
    setState({
      isAuth: false
    })
    history.push('/login');

    // axiosWithAuth()
    // .post('/api/logout')
    // .then(res => {
    //   localStorage.removeItem('token');
    //   history.push('/login');
    //   setState({
    //     isAuth: false
    //   })
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }

  return (
    <Router>
      <div className="App"> 
        <Header isAuth={state.isAuth} handleLogout={handleLogout}/>
      
        <Switch>

          <PrivateRoute
            isAuth={state.isAuth}
            exact path='/profile'>
            <Profile />
          </PrivateRoute>

          <Route path='/login'>
            <Login setAuth={setState} />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
