import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className='main' as={Link} to='/'>
                <img className='image' src='logo.jpg' width={45} alt="" />
                <p>Developer</p>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
            
                <Nav className=''>
                <Nav.Link  as={Link} to='/services'>Services</Nav.Link>
                <Nav.Link  as={Link} to='/blogs'>Blogs</Nav.Link>
                <Nav.Link  as={Link} to='/about'>About</Nav.Link>
                <Nav.Link  as={Link} to='/registration'>registration</Nav.Link>

                { user ? (<button className='header-logut-btn' onClick={()=>signOut(auth)}>Log out</button>)
                        : 
                            (<Nav.Link as={Link} to='/login'>Log in</Nav.Link>)
                        }
                        {
                         user ?
                        (<span className='header-d-name'>{user?.displayName}</span>) : ''
                        } 
               
                </Nav>

            </Navbar.Collapse>
        </Container>

    </Navbar>
    );
};

export default Header;