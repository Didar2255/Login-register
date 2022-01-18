import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const NavBar = () => {
    const { user, handelLogOut } = useFirebase()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    {!user?.email ? <NavLink to='/login'>
                        Login
                    </NavLink> :
                        <button onClick={handelLogOut}>Logout</button>
                    }
                    <NavLink to='/hello'>
                        Hello
                    </NavLink>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;