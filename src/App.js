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



class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // activeUser: null,
      users: jasonUsers,
      activeUser: {
        id: 1234,
        fname: "John",
        lname: "Doe"
      }
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogin(activeUser) {
    this.setState({
      activeUser: activeUser
    })
  }
  
  handleLogout() {
    this.setState({
      activeUser: null
    })
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
        <ECardPage activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
      <Route exact path="/f-card">
        <FCard activeUser={activeUser} handleLogout={this.handleLogout}/>
      </Route>
    </Switch>
    </HashRouter>
  </div>
    
  );
}
}

export default App;
