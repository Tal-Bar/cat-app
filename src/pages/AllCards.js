import React, { Component } from 'react';
import Navbar from '../conponents/Navbar';
import { Redirect } from 'react-router-dom';
import eCardsJson from '../data/eCards.json';
import ECards from '../conponents/ECards';
import FCards from '../conponents/FCards';
import fCardsJson from '../data/fCards.json'
import './AllCards.css'
import ECardPage from './E-card';

class AllCards extends Component {


    constructor(props) {
        super(props);
        
    }
    
    render() {
        const {activeUser, handleLogout,ECards:eCardsList,FCards:fCardsList} = this.props;

        // if (!activeUser) {
        //     return <Redirect to="/"/>
        // }
        
        return (
            <div>
                <Navbar activeUser={activeUser} handleLogout={handleLogout}/>
                {/* <div>
                All Cards Page
                </div> */}
                <div className ="cards-container">
                    {
                        eCardsJson.map(card =>{
                           return <ECards key={card.id} data={card}  /> 
                        })
                    }
                     {
                        fCardsJson.map(card =>{
                           return <FCards key={card.id} data={card}  /> 
                        })
                    }
                    {
                        eCardsList.map((card,i)=>{
                            return <ECards key={card.name+i} data={card} onClick={()=>this.props.onECardSelect(card)}/>
                        })
                    }
                    {
                        fCardsList.map((card,i)=>{
                            return <FCards key={card.name+i} data={card} onClick={()=>this.props.onFCardSelect(card)}/>
                        })
                    }
                </div>
                
            </div>
        );
    }
}

export default AllCards;