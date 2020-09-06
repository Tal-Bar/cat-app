import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Redirect, Link } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";
import eCardsJson from "../data/eCards.json";
import "./UserHomePage.css";

class UserHomePage extends Component {
  constructor(props) {
    super(props);
    this.handleCard = this.handleCard.bind(this);
    this.handleToAllCards = this.handleToAllCards.bind(this);
    this.state = {
      cardRoute: "",
    };
  }
  handleCard(event) {
    this.setState({ ...this.state, cardRoute: event.target.value });
  }
  handleToAllCards() {
    this.setState({ ...this.state, cardRoute: "allCards" });
  }

  render() {
    const { activeUser, handleLogout, ECards, FCards } = this.props;

    if (!activeUser) {
      return <Redirect to="/" />;
    }

    switch (this.state.cardRoute) {
      case "E":
        return <Redirect to="/e-card" />;
      case "F":
        return <Redirect to="/f-card" />;
      default:
        break;
    }
    return (
      <div>
        <Navbar activeUser={activeUser} handleLogout={handleLogout} />
        <div className="user-home-container">
          {ECards.filter((data) => data.status === "open").length > 0 ||
          FCards.filter((data) => data.status === "open").length > 0 ? (
            <h2>Open Cards</h2>
          ) : null}
          <div className="PreviewCards">
            {ECards.filter((data) => data.status === "open").map((data, i) => {
              return (
                <PreviewCard
                  onClick={() => {
                    this.props.onECardSelect(data);
                  }}
                  key={i}
                  data={data}
                  type="e"
                />
              );
            })}
            {FCards.filter((data) => data.status === "open").map((data, i) => {
              return (
                <PreviewCard
                  onClick={() => {
                    this.props.onFCardSelect(data);
                  }}
                  key={i}
                  data={data}
                  type="f"
                />
              );
            })}
          </div>

          <div className="user-home-btn-container">
            <Link to="/cards">
              <button className="all-cards-btn">All Cards</button>
            </Link>
            <select
              id="new-card"
              className="new-card-btn"
              onChange={this.handleCard}
            >
              <option selected disabled hidden>
                Open a New card
              </option>
              <option value="E">Trap a Cat</option>
              <option value="F">Shift Change in Feeding Station</option>
              <option value="G">Foster Home Needed</option>
              <option value="H">Medicine Needed</option>
              <option value="I">Equipment Needed</option>
              <option value="J">Other</option>
            </select>

            <Link to="/users-list" className="link">
              <button className="user-list-btn">Users List</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserHomePage;
