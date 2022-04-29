import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Header.css'
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    return (
        <Container className="mb-5 mt-2">
        <Navbar collapseOnSelect expand="lg" >
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
                <Nav.Link  as={Link} to='inventory'>Inventory</Nav.Link>

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

    </Navbar>
        </Container>
    );
};

export default Header;