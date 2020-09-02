

import React, { Component } from 'react';
import Navbar from '../conponents/Navbar';
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
                    <Navbar activeUser={activeUser} handleLogout={handleLogout}/>

                    <div className="test">
                    <div className="GuestHomePage">
                        <h1>STREET CAT</h1>
                       
                        <Link to ='/signup'>
                        <button >Join Us</button>
                        </Link>
                    </div>
                    </div>
                </div>
            );
        }

            return <Redirect to='/home'/>
        
    }
}

export default GuestHomePage;