import React, { Component } from "react";
import styles from "./PreviewCard.module.css";

class PreviewCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, type } = this.props;
    // this.props.data
    return (
      <div className={styles["preview-card"]} {...this.props}>
        <div className={styles["img-cont"]}>
          <img src={data.img} />
        </div>
        <div className={styles["data-container"]}>
          <h3>
            {type === "e" ? (
              <>
                <span>Trap a Cat </span>
              </>
            ) : type === "f" ? (
              <span>Shift Change in Feeding Station</span>
            ) : null}
          </h3>
          <p>
            Name: {data.fname} {data.lname}
          </p>
          <p>Location: {data.location} </p>
          {type === "e" ? (
            <>
              <p>Date: {data.date} </p>
            </>
          ) : type === "f" ? (
            <>
              <p>Date From: {data.from} </p>
              <p>Date To:{data.to}</p>
            </>
          ) : null}
          <p> {data.text}</p>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
