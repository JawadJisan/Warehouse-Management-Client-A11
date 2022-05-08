import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Header.css'
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)

    return (
           <Navbar style={{ backgroundColor: "#050c1a", color: "white" }} collapseOnSelect expand="lg" variant="dark" fixed ="top">
           <img style={{ width: '50px' }} src={logo} alt="" />
                <Navbar.Brand as={Link} to='/'><strong className="pl-1 h2">AUTOMOTIVE..</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
                <Nav className=''>
                <Nav.Link  as={Link} to='/blogs'><strong class="h4">Blogs</strong></Nav.Link>
                <Nav.Link  as={Link} to='/contact'><strong class="h4">Contact</strong></Nav.Link>
                <Nav.Link  as={Link} to='/manageInventories'>
                <strong class="h4">Manage Inventories</strong></Nav.Link>
                { user ?<Nav.Link  as={Link} to='/myitems'><strong class="h4">MyItems</strong></Nav.Link>: ''}
                { user ?<Nav.Link  as={Link} to='/addInventories'><strong class="h4">Add New</strong></Nav.Link>: ''}
                { user ? (<Button className='w-25 mx-auto' onClick={()=>signOut(auth)}>Log out</Button>)
                        : 
                            (<Nav.Link as={Link} to='/login'><strong class="h4">Log in</strong></Nav.Link>)
                        }
                    {
                         user ?
                        (<span className=''>{user?.email}</span>) : '' } 
                   
                
               
                </Nav>

            </Navbar.Collapse>

    </Navbar>
    );
};

export default Header;