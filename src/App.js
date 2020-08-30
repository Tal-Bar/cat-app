import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import GuestHomePage from './pages/GuestHomePage';
import jasonUsers from './data/users.json';
import UserHomePage from './pages/UserHomePage'
import FCard from './pages/F-Card';
import AllCards from './pages/AllCards';
import ECardPage from './pages/E-card';
import NewECard from './pages/NewEcard';
import SignUp from './pages/SignUp'
import UsersList from './pages/UsersList';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      activeUser: null,
        // activeUser: {
      //   id: 1234,
      //   fname: "John",
      //   lname: "Doe"
      // }
      users: jasonUsers,
      route:"",
      ECards:[],
      userCards:[],
      userCardIndex:0
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.updateNewEcard=this.updateNewEcard.bind(this)
    this.handleStatus=this.handleStatus.bind(this)
    this.updateUserCards=this.updateUserCards.bind(this)
    this.onCardSelect=this.onCardSelect.bind(this)
  }

  handleLogin(activeUser) {
    this.setState({
      activeUser: activeUser
    })
  }
  
  handleLogout() {
    this.setState({
      activeUser: null,
      
    })
  }
  
  updateNewEcard(data){
       const  temp = [...this.state.ECards,data]
      this.setState({ECards:temp})

  }
  handleStatus(status,card){
    let tempArr =[...this.state.ECards]
    tempArr.forEach(cardItem=>{
      if(card==cardItem){
        cardItem.status=status
      }
    })
    this.setState({ECards:tempArr})
  }
  
  updateUserCards(data){
    const temp=[...this.state.userCards,data]
    this.setState({userCards:temp})
  } 

  onCardSelect(card){
    let index =this.state.ECards.indexOf(card)
    this.props.history.push('/new-e-card')
  }

  render() {

    const {activeUser, users} = this.state;

    
  return (
    
    
  <div>
   
   
    <Switch>
      <Route exact path="/">
        <GuestHomePage activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
      <Route exact path="/home">
        <UserHomePage activeUser={activeUser} handleLogout={this.handleLogout} ECards={this.state.ECards}/>
      </Route>
      <Route exact path="/login">
        <LoginPage activeUser={activeUser} users={users} handleLogin={this.handleLogin}/>
      </Route>    
      <Route exact path="/cards">
        <AllCards activeUser={activeUser} handleLogout={this.handleLogout} ECards={this.state.ECards} onCardSelect={this.onCardSelect}/>
      </Route>
      <Route exact path="/e-card">
        <ECardPage activeUser={activeUser} handleLogout={this.handleLogout} updateNewEcard={this.updateNewEcard}/>
      </Route>
      <Route exact path="/f-card">
        <FCard activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
      <Route exact path="/new-e-card">
        <NewECard activeUser={activeUser} handleLogout={this.handleLogout} handleStatus={this.handleStatus} newECardData={this.state.ECards[this.state.userCardIndex]}/>
      </Route>
      <Route exact path="/users-list">
        <UsersList activeUser={activeUser} handleLogout={this.handleLogout} userCards={this.state.userCards}/>
      </Route>
      <Route exact path="/signup">
        <SignUp activeUser={activeUser} handleLogout={this.handleLogout} updateUserCards={this.updateUserCards}/>
      </Route>
    </Switch>
  </div>
    
  );
}
}

export default withRouter(App);
