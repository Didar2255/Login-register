import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const [login, setLogin] = useState({})
    const { handelLogin, user } = useFirebase()
    const location = useLocation()
    const navigate = useNavigate()
    const handelOnchange = (e) => {
        const filed = e.target.name;
        const value = e.target.value;
        const loginData = { ...login }
        loginData[filed] = value;
        setLogin(loginData);
    }
    const handelFormControl = (e) => {
        handelLogin(login.email, login.password, location, navigate)
        e.preventDefault()
    }
    return (
        <Container>
            <div className='row my-5'>
                <div className="col-md-5">
                    <div className="terms-section">
                        <h4 className='my-4'>Do not have an account ?</h4>
                        <Link to='/registration'>
                            <button>Create Account</button>
                        </Link>
                        <p>Terms & Conditions *</p>
                        <p>Your privacy and security are important to us. For more <br /> information on how we use your data read our</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="login">
                        <h5>Login</h5>
                        <p>Please login below account detail !</p>
                        <div className="login-form">
                            <form onSubmit={handelFormControl}>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    onBlur={handelOnchange}
                                />
                                <input
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    onBlur={handelOnchange}
                                />
                                <button type='submit'>Sign In</button>
                            </form>
                        </div>
                        {user?.email && <Alert >
                            User Successfully create
                        </Alert>}
                        <p>Forget account?</p>
                        <button className='google-button' onClick={''}><i className="fab fa-google sign-icon" ></i> Google Sign In</button>

                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Login;