import React, { Component } from 'react';
import RecipesNavbar from '../conponents/RecipesNavbar';
import { Redirect } from 'react-router-dom';
import eCardsJson from '../data/eCards.json';
import ECards from '../conponents/ECards';
import FCards from '../conponents/FCards';
import fCardsJson from '../data/fCards.json'
import './AllCards.css'

class AllCards extends Component {


    constructor(props) {
        super(props);
        
    }
    
    render() {
        const {activeUser, handleLogout} = this.props;

        // if (!activeUser) {
        //     return <Redirect to="/"/>
        // }
        
        return (
            <div>
                <RecipesNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <div>
                All Cards Page
                </div>
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
                </div>
                
            </div>
        );
    }
}

export default AllCards;