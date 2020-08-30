import React, { Component } from 'react';
import './Navbar.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RecipesNavbar extends Component {

    constructor(props) {
        super(props);
        
        console.log(this.props.activeUser);
    }
    


    render() {

        const {activeUser, handleLogout} = this.props;

        const recipesMenuItem = activeUser ? <li><a href="#cards">Cards</a></li> : null;
        const loginMenuItem = !activeUser ? <li className="right"><a href="#login">Login</a></li> : null;
        const signupMenuItem = !activeUser ? <li className="right"><a href="#signup">Sighup</a></li> : null;
        // const logoutMenuItem = activeUser ? <li className="right"><a href="#login">Logout</a></li> : null;
        const logoutMenuItem = activeUser ? <li className="right"><a onClick={() => {handleLogout()}} href="#">Logout</a></li> : null;


        return (

            // <Navbar bg="light" expand="lg">
            //     <Navbar.Brand href="#/">Recipe Book</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="mr-auto">
            //             {recipesMenuItem}
            //         </Nav>
            //         <Nav className="ml-auto">
            //             {loginMenuItem}
            //             {signupMenuItem}
            //             {logoutMenuItem}
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>


            <div>
                <ul className="topnav">
                    <li>
                        <Link  className="active" to="/">
                            <a>Cat App</a>
                        </Link>
                    </li>
                   
                    {recipesMenuItem}
                    {loginMenuItem}
                    {signupMenuItem}
                    {logoutMenuItem}
                       
                </ul>
            </div>
        );
    }
}

export default RecipesNavbar;

