import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Login.css";



const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/service';

    const handleGoogleLogin = () => {
        signInUsingGoogle ()
        .then(result =>{
            history.push(redirect_url);
        });
    }

    return (
        <div>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex justify-content-center">
        
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div className="facebook text-center mr-3">
                            <div className="fa fa-facebook"></div>
                        </div>
                        <div className="twitter text-center mr-3">
                            <div className="fa fa-twitter"></div>
                        </div>
                        <div className="linkedin text-center mr-3">
                            <div className="fa fa-linkedin"></div>
                        </div>
                        <button onClick={handleGoogleLogin} className = "google-button  btn btn-danger   mt-2 mb-2" >Google Sing In </button>
                    </div>
                    <div className="row px-3 mb-4">
                        <div className="line"></div> <small className="or text-center">Or</small>
                        <div className="line"></div>
                    </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> </div>
                    <div className="row px-3"> <label class="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" placeholder="Enter password"/> </div>
                    
                    
                    <div className="row mb-3 px-3 mt-2 justify-content-center"> <button type="submit" className="btn btn-blue text-center">Login</button> </div>
                    <div className="row mb-4 px-3 "> <small className="font-weight-bold">Don't have an account? <a className="text-danger " href="/register">Register</a></small> </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
    
            
        </div>
    );
};

export default Login;