import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

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
  // const history = useHistory();

  // const changeWindow = () => {
  //   window.location.href = '/login';
  // }

//   function asyncChangeWindow(){
//     return new Promise((resolve,reject)=>{
//       changeWindow();
//     });
// }


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

          <Route path='/'>
            {state.isAuth ? <Redirect to='/profile' /> : <Login setAuth={setState} />}
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
