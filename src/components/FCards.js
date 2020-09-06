import React, { Component } from "react";
import "./FCards.css";

class FCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    // this.props.data
    return (
      <div className="fcards-container" {...this.props}>
        <div className="fcard-card">
          <div className="imgBx">
            <img src={data.img} />
          </div>
          <div className="fcard-content">
            <h3>Shift Change in Feeding station</h3>
            <p>
              Name: {data.fname} {data.lname}
            </p>
            <p>Location: {data.location} </p>
            <p>From: {data.from} </p>
            <p>To: {data.to} </p>
            <p>Feeding Time:{data["feeding-time"]}</p>
            <p>Number of Cats:{data["number-of-cats"]}</p>
            <p>Phone:{data.phone}</p>
            <p> {data.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FCards;
