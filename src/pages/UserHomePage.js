import React, { Component } from 'react';
import RecipesNavbar from '../conponents/RecipesNavbar';
import { Redirect } from 'react-router-dom';
import PreviewCard from '../conponents/PreviewCard';
import eCardsJson from '../data/eCards.json'
import './UserHomePage.css'

class UserHomePage extends Component {


    constructor(props) {
        super(props);
        this.handleCard=this.handleCard.bind(this)
        this.handleToAllCards =this.handleToAllCards.bind(this)
        this.state ={
            cardRoute:""
        }
        
    }
    handleCard(event){
        console.log(event.target.value)

        this.setState({...this.state,cardRoute:event.target.value})
       
    }
    handleToAllCards(){
        this.setState({...this.state,cardRoute:'allCards'})
    }
    render() {
        const {activeUser, handleLogout} = this.props;

        if (!activeUser) {
            return <Redirect to="/"/>
        }
       
        switch (this.state.cardRoute) {
            case "E":
                return <Redirect to='/e-card'/>
            case "F":
                return <Redirect to='/f-card'/>
            case 'allCards':
                return <Redirect to ='/cards'/>
            default:
                break;
        }
        return (
            <div>
                <RecipesNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <div >

                    <div className="PreviewCards">
                        { 
                        eCardsJson.map(data=>{
                            return <PreviewCard key={data.id} data ={data}/>
                            })
                        }
                    </div>

                    <button onClick={this.handleToAllCards}>All Cards</button>

                    <div className="two-btn">
                        <select id = "new-card" onChange={this.handleCard}>
                        <option selected disabled hidden >Open a New card</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                        <option value="I">I</option>
                        <option value="J">J</option>
                        </select>

                        <button>Users List</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default UserHomePage;