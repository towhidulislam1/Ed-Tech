import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "../Login/Login/Login.css"

const Register = () => {
    const {signInUsingGoogle, handleUserRegister} = useAuth();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const handleRegistration = e => {
        e.preventDefault();
        console.log( email, password);
        if (password.length<6){
            setError('Password Must be at least 6 characters')
            return;
        }
        
        handleUserRegister (  email, password);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto" onSubmit={handleRegistration}>
    <div className="card card0 border-0">
        <div className="row d-flex justify-content-center">
        
            <div className="col-lg-6" >
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
                        <button onClick={signInUsingGoogle} className = "google-button  btn btn-danger   mt-2 mb-2" >Google Sing In </button>
                    </div>
                    <div className="row px-3 mb-4">
                        <div className="line"></div> <small className="or text-center">Or</small>
                        <div className="line"></div>
                    </div>
                    <form  onSubmit={handleRegistration} >
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label> <input className="mb-4" type="text" name="email" onChange={handleEmailChange} placeholder="Enter a valid email address" required /> </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm" >Password</h6>
                        </label> <input type="password" onBlur={handlePasswordChange} name="password" placeholder="Enter password" required />
                        <p className="text-danger">{error}</p>
                         </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Re-Password</h6>
                        </label> <input type="password"  onBlur={handlePasswordChange}  name="password" placeholder="Re-Enter password" required /> </div>
                    
                    
                    <div className="row mb-3 px-3 mt-2 justify-content-center"> <button type="submit"  className="btn btn-blue text-center">Register</button> 
                    </div>
                    </form>
                    
                    <div className="row mb-4 px-3 "> <small className="font-weight-bold">I have an account? <a className="text-danger  " href="/login" >Login</a></small> </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
        
        </div>
    );
};

export default Register;