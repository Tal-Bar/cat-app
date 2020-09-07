import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import GuestHomePage from "./pages/GuestHomePage";
import jsonUsers from "./data/users.json";
import UserHomePage from "./pages/UserHomePage";
import FCardPage from "./pages/F-Card";
import AllCards from "./pages/AllCards";
import ECardPage from "./pages/E-card";
import NewECard from "./pages/NewEcard";
import NewFCard from "./pages/NewFcard";
import SignUp from "./pages/SignUp";
import UsersList from "./pages/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: null,
      // activeUser: {
      //   id: 1234,
      //   fname: "John",
      //   lname: "Doe",
      // },
      users: jsonUsers,
      route: "",
      ECards: [],
      FCards: [],
      userCards: [],
      ECardIndex: 0,
      FCardIndex: 0,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.updateUserCards = this.updateUserCards.bind(this);

    this.handleStatusEcard = this.handleStatusEcard.bind(this);
    this.updateNewEcard = this.updateNewEcard.bind(this);
    this.onECardSelect = this.onECardSelect.bind(this);

    this.handleStatusFcard = this.handleStatusFcard.bind(this);
    this.updateNewFcard = this.updateNewFcard.bind(this);
    this.onFCardSelect = this.onFCardSelect.bind(this);
  }

  handleLogin(activeUser) {
    this.setState({
      activeUser: activeUser,
    });
  }

  handleLogout() {
    this.setState({
      activeUser: null,
    });
  }
  updateUserCards(data) {
    const temp = [...this.state.userCards, data];
    console.log(temp);
    this.setState({ userCards: temp, users: [...this.state.users, ...temp] });
  }

  /* For E cards */
  updateNewEcard(data) {
    const temp = [...this.state.ECards, data];
    this.setState({ ECards: temp, ECardIndex: temp.length - 1 });
  }
  handleStatusEcard(status, card) {
    let tempArr = [...this.state.ECards];
    tempArr.forEach((cardItem) => {
      if (card == cardItem) {
        cardItem.status = status;
      }
    });
    this.setState({ ECards: tempArr });
  }

  onECardSelect(card) {
    let index = this.state.ECards.indexOf(card);
    this.setState({ ECardIndex: index });
    this.props.history.push("/new-e-card");
  }

  /* For F Cards */
  updateNewFcard(data) {
    const temp = [...this.state.FCards, data];
    this.setState({ FCards: temp, FCardIndex: temp.length - 1 });
  }
  handleStatusFcard(status, card) {
    let tempArr = [...this.state.FCards];
    tempArr.forEach((cardItem) => {
      if (card == cardItem) {
        cardItem.status = status;
      }
    });
    this.setState({ FCards: tempArr });
  }

  onFCardSelect(card) {
    let index = this.state.FCards.indexOf(card);
    this.setState({ FCardIndex: index });
    this.props.history.push("/new-f-card");
  }

  render() {
    const { activeUser, users } = this.state;

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <GuestHomePage
              activeUser={activeUser}
              handleLogout={this.handleLogout}
            />
          </Route>
          <Route exact path="/home">
            <UserHomePage
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              ECards={this.state.ECards}
              onECardSelect={this.onECardSelect}
              FCards={this.state.FCards}
              onFCardSelect={this.onFCardSelect}
            />
          </Route>
          <Route exact path="/login">
            <LoginPage
              activeUser={activeUser}
              users={users}
              handleLogin={this.handleLogin}
            />
          </Route>
          <Route exact path="/signup">
            <SignUp
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              updateUserCards={this.updateUserCards}
            />
          </Route>
          <Route exact path="/cards">
            <AllCards
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              ECards={this.state.ECards}
              onECardSelect={this.onECardSelect}
              FCards={this.state.FCards}
              onFCardSelect={this.onFCardSelect}
            />
          </Route>
          <Route exact path="/e-card">
            <ECardPage
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              updateNewEcard={this.updateNewEcard}
            />
          </Route>
          <Route exact path="/f-card">
            <FCardPage
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              updateNewFcard={this.updateNewFcard}
            />
          </Route>
          <Route exact path="/new-e-card">
            <NewECard
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              handleStatus={this.handleStatusEcard}
              newECardData={this.state.ECards[this.state.ECardIndex]}
            />
          </Route>
          <Route exact path="/new-f-card">
            <NewFCard
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              handleStatus={this.handleStatusFcard}
              newFCardData={this.state.FCards[this.state.FCardIndex]}
            />
          </Route>
          <Route exact path="/users-list">
            <UsersList
              activeUser={activeUser}
              handleLogout={this.handleLogout}
              userCards={this.state.userCards}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
