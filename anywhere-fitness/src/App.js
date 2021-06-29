import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Profile from './components/Profile';
import SignUp from './components/Signup';
import Onboarding from './components/Onboarding';
import SearchClasses from './components/SearchClasses';
import SearchPunchpasses from './components/SearchPunchpasses';
import Modal from './components/Modal';

// import axiosWithAuth from './utils/axiosWithAuth';

import './App.css';

const initialValue = {
  isAuth: false
}

const App = () => {

  const [state, setState] = useState(initialValue);
  const [isModal, setIsModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');

  const handleModalCancel = () => {
    setIsModal(false);
    setTypeModal('');
  }

  const handleClassCancel = () => {
      setTypeModal('success');
      // axiosWithAuth()
      //     .delete(`/api/delete/${id}`)
      //     .then(res => {
      //         setTypeModal('success');
      //     })
      //     .catch(err => {
      //         setTypeModal('error');
      //     })
  }


  const handleClassReschedule = () => {
      setTypeModal('success');
      // axiosWithAuth()
      //     .put(`/api/delete/${id}`, someData)
      //     .then(res => {
      //         setTypeModal('success');
      //     })
      //     .catch(err => {
      //         setTypeModal('error');
      //     })
  }


  const handlePunchpassCancel = () => {
      setTypeModal('success');
      // axiosWithAuth()
      //     .delete(`/api/delete/${id}`)
      //     .then(res => {
      //         setTypeModal('success');
      //     })
      //     .catch(err => {
      //         setTypeModal('error');
      //     })
  }

  return (
      <div className="App"> 
        <Header isAuth={state.isAuth} setAuth={setState} />

        { 
          isModal ? 
          <Modal 
              typeModal={typeModal} 
              handleModalCancel={handleModalCancel}
              handleClassCancel={handleClassCancel}
              handleClassReschedule={handleClassReschedule}
              handlePunchpassCancel={handlePunchpassCancel}
          /> 
          : null
        }
      

          <PrivateRoute
            isAuth={state.isAuth}
            setIsModal={setIsModal}
            setTypeModal={setTypeModal}
            exact path='/profile'
            component={Profile}
          />

          <Route path='/signup'>
            <SignUp setAuth={setState} />
          </Route>

          <Route path='/onboarding' component={Onboarding} />

          <Route path='/search-classes'>
            <SearchClasses 
              setIsModal={setIsModal}
              setTypeModal={setTypeModal}
            />
          </Route>

          <Route path='/search-punchpasses'>
            <SearchPunchpasses 
              setIsModal={setIsModal}
              setTypeModal={setTypeModal}
            />
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
