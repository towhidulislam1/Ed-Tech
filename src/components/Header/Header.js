import { logDOM } from '@testing-library/dom';
import React from 'react';
import "./Header.css";

import logo from "../../images/logo/log.jpg";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button,  Nav, Navbar } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';



const Header = () => {
  const {user,logOut} = useAuth();
    const activeStyle= {
        fontWeight: "bold",
        color: "rgb(19, 141, 172)"
    }
    
    return (
        <div>
            <div className="MenuBar-container  ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
            <div className="logo-img mt-2">
                <h2 class="barnd">Ed-Tech</h2>
            </div>
        </div>
        <div className="col-md-10 col-sm-3 mt-2">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <NavLink activeStyle={activeStyle} to="/home" className="items">
                  <li>Home</li>
                </NavLink >
                <NavLink activeStyle={activeStyle} to="/about" className="items">
                  <li>About us</li>
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/Service" className="items">
                  <li>Courses</li>
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/contact" className="items">
                  <li>Contact us</li>
                </NavLink>
              {user?.displayName ?
                <NavLink onClick={logOut} activeStyle={activeStyle} to="" className="items">
                <li>Logout</li>
              </NavLink> :
              <NavLink activeStyle={activeStyle} to="/login" className="items">
              <li>Login</li>
            </NavLink>
            }
            <NavLink activeStyle={activeStyle} to="/register" className="items ms-0">
              <li>Register</li>
            </NavLink>
                <NavLink activeStyle={activeStyle} to="" className="items-signed">
                <li>PN:{user?.displayName}</li>
              </NavLink>
              
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>    
        </div>

    );
};

export default Header;