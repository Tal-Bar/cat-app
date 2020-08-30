

import React, { Component } from 'react';
import RecipesNavbar from '../conponents/RecipesNavbar';
import { Redirect, Link } from 'react-router-dom';
import './GuestHomePage.css'




class GuestHomePage extends Component {

constructor(props) {
    super(props);
    
}


    render() {
        const {activeUser, handleLogout} = this.props;
        if(!activeUser){

            return (
                <div >
                    <RecipesNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                    
                    <div className="GuestHomePage">
                        <h1>Welcome</h1>
                    <Link to ='/signup'>
                    <button>Join Us</button>
                    </Link>
                    </div>
                </div>
            );
        }

            return <Redirect to='/home'/>
        
    }
}

export default GuestHomePage;