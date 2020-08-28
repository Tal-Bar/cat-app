import React, { Component } from 'react';
// import './NewECard.css'

class NewECard extends Component {
    
    render() {
        const {activeUser, handleLogout,newECardData} = this.props;
        return (
            <div className="new-e-card-container">
               <label>Name: {newECardData.firstname}</label> 
               <label>Name: {newECardData.lastname}</label>  
               <label>Name:{newECardData.location}</label>
               <label>Name:{newECardData.phone}</label>
               <label>Name:{newECardData.date}</label>
               <label>Name:{newECardData.description}</label>
               <label>Cat Age:</label>
               <label> Cat Type: </label>
               <img src="" alt=""/>
            </div>
        );
    }
}

export default NewECard;