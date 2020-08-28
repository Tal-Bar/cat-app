import React, { Component } from 'react';
import './Navbar.css'
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
        const sighupMenuItem = !activeUser ? <li className="right"><a href="#Sighup">Sighup</a></li> : null;
        // const logoutMenuItem = activeUser ? <li className="right"><a href="#login">Logout</a></li> : null;
        const logoutMenuItem = activeUser ? <li className="right"><a onClick={() => {handleLogout()}} href="#">Logout</a></li> : null;


        return (
            <div>
                <ul className="topnav">
                    <li>
                        <Link  className="active" to="/">
                            <a>Cat App</a>
                        </Link>
                    </li>
                   
                    {recipesMenuItem}
                    {loginMenuItem}
                    {sighupMenuItem}
                    {logoutMenuItem}
                       
                </ul>
            </div>
        );
    }
}

export default RecipesNavbar;

