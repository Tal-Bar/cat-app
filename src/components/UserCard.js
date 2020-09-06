import React, { Component } from 'react';
import './UserCard.css'

class UserCard extends Component {
    render() {
        const {user}=this.props
        return (
            <div className='user-card-container'>
              <label>Name: {user.fname} {user.lname}</label> 
              <label>Location: {user.location}</label>   
              <label>E-Mail: {user.email}</label>  
              <label>Main Activity: {user.type}</label> 
              
              <div>
                  <img src={user.img} alt=""/>
              </div>
            </div>
        );
    }
}

export default UserCard;