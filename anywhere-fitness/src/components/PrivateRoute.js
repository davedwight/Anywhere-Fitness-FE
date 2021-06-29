import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, isAuth, setIsModal, setTypeModal, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if (isAuth) {
            return(<Component {...props} setIsModal={setIsModal} setTypeModal={setTypeModal} />)
        } else {
            return <Redirect to='/login' />
        }
    }} />
}

export default PrivateRoute;