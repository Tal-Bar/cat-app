import React, { Component } from "react";
import "./NewEcard.css";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
class NewECard extends Component {
  constructor(props) {
    super(props);
    this.radioInput = React.createRef();
  }

  componentDidUpdate() {
    console.log(this.radioInput.current.value);
  }
  render() {
    const { activeUser, handleLogout, newECardData, handleStatus } = this.props;
    console.log(this.props);
    if (!newECardData) {
      return <Redirect to="/e-card" />;
    }

    return (
      <div>
        <Navbar activeUser={activeUser} handleLogout={handleLogout} />
        <div className="newEContainer">
          <h2>Trap A Cat</h2>
          <div className="new-e-card-container">
            <div className="new-e-first-col">
              <label>First Name: {newECardData.fname}</label>
              <label>Last Name: {newECardData.lname}</label>
              <label>Location:{newECardData.location}</label>
              <label>Phone:{newECardData.phone}</label>
              <label>Date:{newECardData.date}</label>
              <label>Text:{newECardData.text}</label>
              <label>Cat Age: {newECardData["cat-age"]}</label>
              <label> Cat Type: {newECardData["cat-type"]} </label>
            </div>
            <div className="new-e-second-col">
              <img src={newECardData.img} alt="image" />
              <div
                className="status"
                onChange={(event) =>
                  handleStatus(event.target.value, newECardData)
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
                  id="open"
                  defaultChecked={newECardData.status === "open"}
                />
                <label>Active</label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  id="active"
                  defaultChecked={newECardData.status === "active"}
                />
                <label>Closed</label>
                <input
                  type="radio"
                  name="status"
                  value="closed"
                  id="closed"
                  defaultChecked={newECardData.status === "closed"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewECard;
