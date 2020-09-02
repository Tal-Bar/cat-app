import React, { Component } from 'react';
import './UserCard.css'

class UserCard extends Component {
    render() {
        const {user}=this.props
        return (
            <div className='user-card-container'>
              <label>First Name: {user.fname}</label>  
              <label>Last Name: {user.lname}</label>  
              <label>E-Mail: {user.email}</label>  
              <label>Type: {user.type}</label> 
              <div>
                  <img src={user.img} alt=""/>
              </div>
            </div>
        );
    }
}

export default UserCard;