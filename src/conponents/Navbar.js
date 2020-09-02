import React, { Component } from 'react';
import './Navbar.css'
import { Navbar as BSNavbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbar extends Component {

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

            <BSNavbar className='navbar-main' expand="lg">
                <BSNavbar.Brand href="#/">Street Cat</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto justify-content-end">
                        {recipesMenuItem}
                    </Nav>
                    <Nav className="ml-auto justify-content-end">
                        {loginMenuItem} </Nav>
                     <Nav>   {signupMenuItem}
                        {logoutMenuItem}
                    </Nav>
                </BSNavbar.Collapse>
            </BSNavbar>


            // <div className="new-navbar">
            //     <ul className="topnav">
            //         <li>
            //             <Link  className="active" to="/">
            //                 <a>Cat App</a>
            //             </Link>
            //         </li>
                   
            //         {recipesMenuItem}
            //         {loginMenuItem}
            //         {signupMenuItem}
            //         {logoutMenuItem}
                       
            //     </ul>
            // </div>
        );
    }
}

export default Navbar;

