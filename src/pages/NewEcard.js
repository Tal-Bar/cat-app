import React, { Component } from 'react';
import './NewEcard.css'
import { Redirect } from 'react-router-dom';
import RecipesNavbar from '../conponents/RecipesNavbar';
class NewECard extends Component {
 
    render() {
        const {activeUser, handleLogout,newECardData,handleStatus} = this.props;
        if(!newECardData){
            return <Redirect to='/e-card'/>
                }
        return (
            <div className='newEContainer'>
             <RecipesNavbar activeUser={activeUser} handleLogout={handleLogout}/>
            <div className="new-e-card-container">
                <div className='first-col'>
                    <label>Name: {newECardData.firstname}</label> 
                    <label>Name: {newECardData.lastname}</label>  
                    <label>Name:{newECardData.location}</label>
                    <label>Name:{newECardData.phone}</label>
                    <label>Name:{newECardData.date}</label>
                    <label>Name:{newECardData.description}</label>
                    <label>Cat Age: {newECardData.age}</label>
                    <label> Cat Type: {newECardData.type} </label>
                </div>
               <div className='second-col'>
                   <img src={newECardData.photo} alt="image"/>
               </div>
            </div>
                <h3>Status</h3>
                <div id="status" onChange={(event)=>handleStatus(event.target.value)}>
                    <label>Open</label>
                    <input type="radio" name="status" value='open'checked='checked' id=""/>
                    <label >Active</label>
                    <input type="radio" name="status" value='active' id=""/>
                    <label>Closed</label>
                    <input type="radio" name="status" value='closed' id=""/>
                </div>
            </div>
        );
    }
}

export default NewECard;