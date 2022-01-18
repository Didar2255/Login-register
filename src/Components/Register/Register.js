import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Register.css'

const Register = () => {
    const [register, setRegister] = useState({})
    const { handelRegister } = useFirebase()
    const handelOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const registerData = { ...register }
        registerData[field] = value;
        setRegister(registerData)
    }
    const handelFormControl = (e) => {
        handelRegister(register.email, register.password)
        e.preventDefault()
    }
    return (
        <Container>
            <div className='row my-5'>
                <div className="col-md-5">
                    <div className="terms-section">
                        <h4 className='my-4'>Already have an account ?</h4>
                        <Link to='/login'>
                            <button>Log In</button>
                        </Link>
                        <p>Terms & Conditions *</p>
                        <p>Your privacy and security are important to us. For more <br /> information on how we use your data read our</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="registration">
                        <h5>Register</h5>
                        <p>Please register below account detail</p>
                        <div className="registration-form">
                            <form onSubmit={handelFormControl}>
                                <input
                                    type="text"
                                    name='name'
                                    onBlur={handelOnchange}
                                    placeholder='User Name *'
                                />
                                <input
                                    type="email"
                                    name='email'
                                    onBlur={handelOnchange}
                                    placeholder='User Email *'
                                />
                                <input
                                    type="password"
                                    name='password'
                                    onBlur={handelOnchange}
                                    placeholder='User Password *'
                                />
                                <input type="submit" value='Create' className='submit-int' />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Register;