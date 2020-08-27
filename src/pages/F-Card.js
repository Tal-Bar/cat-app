import React, { Component } from 'react';
import RecipesNavbar from '../conponents/RecipesNavbar';
import { Redirect } from 'react-router-dom';
import './F-card.css'

class FCard extends Component {
    render() {
        const {activeUser, handleLogout} = this.props;

        if (!activeUser) {
            return <Redirect to="/"/>
        }
        return (
            <div id="fcard">
                 <RecipesNavbar activeUser={activeUser} handleLogout={handleLogout}/>
               <h1 >F-Card</h1> 

               <div className="wrapper">
               
                    <div className="form-title2"><h2>Shift Change in Feeding station</h2></div>
                        <div className="contact-form">
                  
                            <div className="input-fields">
                                <label for="other">First Name</label> 
                                <input type="text" className="input" placeholder=""/>
                                <label for="other">Last Name</label> 
                                <input type="text" className="input" placeholder=""/>
                                <label for="other">Location</label> 
                                <input type="text" className="input" placeholder=""/>
                                <label for="other">Phone</label> 
                                <input type="text" className="input" placeholder=""/>
                                <label for="other">From</label> 
                                <input type="date" className="input" placeholder=""/>
                                <label for="other">To</label> 
                                <input type="date" className="input" placeholder=""/>
                                <label for="other">Feeding Time</label> 
                                <input type="time" className="input" placeholder=""/>
                                <label for="other">Number of cats</label> 
                                <input type="text" className="input" placeholder=""/>
                            </div>

                            <div className="msg">
                                    <label for="other">Enter your msg</label> 
                                <textarea placeholder="Enter your msg here..."></textarea>
                                    <div >
                                        <label  for="exampleInputFile">Add Photo</label>
                                        <input type="file" id="InputFile2"/>
                                    </div>
                                {/* <div className="btn">Send</div> */}
                                <button className="btn">Send</button>
                            </div>
                   </div>
                </div>

            </div>
        );
    }
}

export default FCard;