import React, { Component } from 'react';
import './ECards.css'

class ECards extends Component {

    constructor(props) {
        super(props);
        
       
        }

    render() {
        const {data}=this.props;
        // this.props.data
        return (
            
            <div className="e-card-wrapper">
                <div className="ecards-container">
                    <div className="ecard-card">
                        <div className="imgBx">
                            <img src={data.img}/>
                        </div>
                        <div className="ecard-content">
                            <h3>{data.type}</h3>
                            <p>Name: {data.fname} {data.lname}</p>
                            <p>Location: {data.location} </p>
                            <p>Date: {data.date} </p>
                            <p>Cat Age:{data["cat-age"]}</p>
                            <p>Cat Type:{data["cat-type"]}</p>
                            <p>Phone:{data.phone}</p>
                            <p> {data.text}</p> 
                        </div>
                    </div>
                </div>
                  
            </div>















            
        );
    }
}

export default ECards;

