import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import "./E-card.css";

class ECardPage extends Component {
  constructor(props) {
    super(props);
    this.RedirectToNewECard = this.RedirectToNewECard.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.state = {
      cardRoute: "",
      firstname: "",
      lastname: "",
      location: "",
      phone: "",
      date: "",
      description: "",
      catType: "",
      catAge: "",
      photo: "",
      status: "open",
    };
  }

  handleInput(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        photo: URL.createObjectURL(event.target.files[0]),
      });
    }
  }

  RedirectToNewECard() {
    //function to callect all the data we entered
    const data = {
      fname: this.state.firstname,
      lname: this.state.lastname,
      location: this.state.location,
      phone: this.state.phone,
      date: this.state.date,
      text: this.state.description,
      "cat-age": this.state.catAge,
      "cat-type": this.state.catType,
      img: this.state.photo,
      status: this.state.status,
    };
    this.props.updateNewEcard(data);
    this.setState({ ...this.state, cardRoute: "newECard" });
  }
  render() {
    const { activeUser, handleLogout } = this.props;
    switch (this.state.cardRoute) {
      case "newECard":
        return <Redirect to="/new-e-card" />;
      default:
        break;
    }

    if (!activeUser) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Navbar activeUser={activeUser} handleLogout={handleLogout} />
        <div>
          <div className="contact-form">
            <div className="form-title">
              <h2>Trap a cat</h2>
            </div>
            <form>
              <div className="input-fields">
                <label for="other">First Name</label>
                <input
                  type="rext"
                  name="firstname"
                  onChange={this.handleInput}
                />

                <label>Last Name</label>
                <input
                  type="rext"
                  name="lastname"
                  onChange={this.handleInput}
                />

                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  onChange={this.handleInput}
                />

                {/* <label >Email</label>
                                <input type="email" name="email"/> */}

                <label>Phone</label>
                <input type="numper" name="phone" onChange={this.handleInput} />

                <label>Date</label>
                <input type="date" name="date" onChange={this.handleInput} />

                {/* <input id="description" type="text" name="description"/> */}
              </div>

              {/* <label >Subject</label>
                            <select className="option" name="subject">
                                <option disabled="disabled" selected="selected" value="">Choose option</option>
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                                <option value="">Subject 3</option>
                            </select> */}
              <div className="description-container">
                <label>Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  maxlength="370"
                  onChange={this.handleInput}
                ></textarea>
              </div>
              <div className="radio-main">
                <p>Cat Age</p>
                <div
                  id="cat-age"
                  className="cat-radio"
                  onChange={this.handleInput}
                >
                  <label>Adult</label>
                  <input type="radio" id="adult" name="catAge" value="adult" />
                  <label>Kitten</label>
                  <input
                    type="radio"
                    id="kitten"
                    name="catAge"
                    value="kitten"
                  />
                  <label>unknown</label>
                  <input
                    type="radio"
                    id="unknown"
                    name="catAge"
                    value="unknown"
                  />
                </div>

                <p>Cat Type</p>
                <div
                  id="cat-type"
                  className="cat-radio"
                  onChange={this.handleInput}
                >
                  <label>Feral cat</label>
                  <input
                    type="radio"
                    id="Feral cat"
                    name="catType"
                    value="Feral cat"
                  />
                  <label>House cat</label>
                  <input
                    type="radio"
                    id="house cat"
                    name="catType"
                    value="house cat"
                  />
                  <label>unknown</label>
                  <input
                    type="radio"
                    id="unknown"
                    name="catType"
                    value="unknown"
                  />
                </div>
                <div>
                  <label className="add-file">Add Photo</label>
                  <input
                    type="file"
                    id="InputFile"
                    name="photo"
                    onChange={this.handleImage}
                  />
                </div>
              </div>
            </form>
            <button
              className="btn-main"
              type="button"
              onClick={this.RedirectToNewECard}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ECardPage;
