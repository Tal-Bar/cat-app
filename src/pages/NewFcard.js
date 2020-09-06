import React, { Component } from "react";
import "./NewFcard.css";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
class NewFCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeUser, handleLogout, newFCardData, handleStatus } = this.props;
    console.log(this.props);
    if (!newFCardData) {
      return <Redirect to="/f-card" />;
    }

    return (
      <div>
        <Navbar activeUser={activeUser} handleLogout={handleLogout} />
        <div className="newFContainer">
          <h2>Shift Change In Feeding Station</h2>
          <div className="new-f-card-container">
            <div className="new-f-first-col">
              <label>First Name: {newFCardData.fname}</label>
              <label>last Name: {newFCardData.lname}</label>
              <label>Location:{newFCardData.location}</label>
              <label>Phone:{newFCardData.phone}</label>
              <label>From:{newFCardData.from}</label>
              <label>To:{newFCardData.to}</label>
              <label>Feeding Time:{newFCardData["feeding-time"]}</label>
              <label>Number of Cats:{newFCardData["number-of-cats"]}</label>
              <label>Text:{newFCardData.text}</label>
            </div>
            <div className="new-f-second-col">
              <img src={newFCardData.img} alt="image" />
              <div
                className="status"
                onChange={(event) =>
                  handleStatus(event.target.value, newFCardData)
                }
                ref={this.radioInput}
              >
                <h3>Status</h3>
                <br />
                <label>Open</label>
                <input
                  type="radio"
                  name="status"
                  value="open"
                  defaultChecked={newFCardData.status === "open"}
                  id="open"
                />
                <label>Active</label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  defaultChecked={newFCardData.status === "active"}
                  id="active"
                />
                <label>Closed</label>
                <input
                  type="radio"
                  name="status"
                  value="closed"
                  defaultChecked={newFCardData.status === "closed"}
                  id="closed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewFCard;
