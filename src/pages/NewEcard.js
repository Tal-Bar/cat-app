import React, { Component } from 'react';
import './NewEcard.css'
import { Redirect } from 'react-router-dom';
import Navbar from '../conponents/Navbar';
class NewECard extends Component {
    constructor(props){
        super(props)
        this.radioInput=React.createRef()
    }

    componentDidUpdate(){
        console.log(this.radioInput.current.value)
    }
    render() {
        const {activeUser, handleLogout,newECardData,handleStatus} = this.props;
        console.log(this.props)
        if(!newECardData){
            return <Redirect to='/e-card'/>
                }

        return (

            <div>
                <Navbar activeUser={activeUser} handleLogout={handleLogout}/>
                <div className='newEContainer'>
            <div className="new-e-card-container">
                <div className='new-e-first-col'>
                    <label>Name: {newECardData.ftname}</label> 
                    <label>Name: {newECardData.lname}</label>  
                    <label>Name:{newECardData.location}</label>
                    <label>Name:{newECardData.phone}</label>
                    <label>Name:{newECardData.date}</label>
                    <label>Name:{newECardData.description}</label>
                    <label>Cat Age: {newECardData['cat-age']}</label>
                    <label> Cat Type: {newECardData['cat-type']} </label>
                </div>
               <div className='new-e-second-col'>
                   <img src={newECardData.img} alt="image"/>
               </div>
            </div>
                <h3>Status</h3>
                <div id="status" onChange={(event)=>handleStatus(event.target.value,newECardData)} ref={this.radioInput}>
                    <label>Open</label>
                    <input type="radio" name="status" value='open' id="open"  defaultChecked={newECardData.status==='open'} />
                    <label >Active</label>
                    <input type="radio" name="status" value='active' id="active"  defaultChecked={newECardData.status==='active'} />
                    <label>Closed</label>
                    <input type="radio" name="status" value='closed' id="closed"  defaultChecked={newECardData.status==='closed'} />
                </div>
            </div>
            </div>
           
        );
    }
}

export default NewECard;