import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";



import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth;
    
    return (
        <Route
        {...rest}
        render={({ location }) =>  user?.email ? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
        }}>
           
        </Redirect>

        }
        >
            
        </Route>
    );
};

export default PrivateRoute;