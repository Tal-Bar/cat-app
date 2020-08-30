import React, { Component } from 'react';
import RecipesNavbar from '../conponents/RecipesNavbar';
import { Redirect, Link } from 'react-router-dom';
import PreviewCard from '../conponents/PreviewCard';
import eCardsJson from '../data/eCards.json'
import './UserHomePage.css'

class UserHomePage extends Component {


    constructor(props) {
        super(props);
        this.handleCard=this.handleCard.bind(this)
        this.handleToAllCards =this.handleToAllCards.bind(this)
        this.state ={
            cardRoute:"",
          
        }
        
    }
    handleCard(event){

        this.setState({...this.state,cardRoute:event.target.value})
       
    }
    handleToAllCards(){
        this.setState({...this.state,cardRoute:'allCards'})
    }
 
    render() {
        const {activeUser, handleLogout,ECards} = this.props;

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
            <div className="user-home-container">
                <RecipesNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <div >

                    <div className="PreviewCards">

                        {/* This is the cards dron the eCardJason: */}
                        {/* { 
                        eCardsJson.map(data=>{
                            return <PreviewCard key={data.id} data ={data}/>
                            })
                        } */}


                        {ECards.filter(data=>data.status==='open').map((data,i)=>{
                            return <PreviewCard key={i} data={data} />
                        })
                        }


                    </div>

                    <button className='all-cards-btn' onClick={this.handleToAllCards}>All Cards</button>

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
                        <Link to ='/users-list'>

                        <button>Users List</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default UserHomePage;