import React from 'react';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import GuestHomePage from './pages/GuestHomePage';
import jasonUsers from './data/users.json';
import UserHomePage from './pages/UserHomePage'
import FCard from './pages/F-Card';
import AllCards from './pages/AllCards';
import ECardPage from './pages/E-card';
import NewECard from './pages/NewEcard';



class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // activeUser: null,
      users: jasonUsers,
      newECardData:null,
      activeUser: {
        id: 1234,
        fname: "John",
        lname: "Doe"
      }
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.updateNewEcard=this.updateNewEcard.bind(this)

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
    console.log('calling from app.js',data)
    this.setState({...this.state,newECardData:data,})
  }

  render() {

    const {activeUser, users} = this.state;


  return (
    
  <div>
    
    <HashRouter>
   
    <Switch>
      <Route exact path="/">
        <GuestHomePage activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
      <Route exact path="/home">
        <UserHomePage activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
      <Route exact path="/login">
        <LoginPage activeUser={activeUser} users={users} handleLogin={this.handleLogin}/>
      </Route>    
      <Route exact path="/cards">
        <AllCards activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
      <Route exact path="/e-card">
        <ECardPage activeUser={activeUser} handleLogout={this.handleLogout} updateNewEcard={this.updateNewEcard}/>
      </Route>
      <Route exact path="/f-card">
        <FCard activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
      <Route exact path="/new-e-card">
        <NewECard activeUser={activeUser} handleLogout={this.handleLogout} newECardData={this.state.newECardData}/>
      </Route>
    </Switch>
    </HashRouter>
  </div>
    
  );
}
}

export default App;
