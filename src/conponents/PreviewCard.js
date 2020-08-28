import React, { Component } from 'react';
import './PreviewCard.css'

class PreviewCard extends Component {

    constructor(props) {
        super(props);
        
       
        }

    render() {
        const {data}=this.props;
        // this.props.data
        return (
            

            <div className="preview-card">
                <div>
                    <img src={data.photo}/>
                </div>
                <div>
                    <h3>{data.type}</h3>
                    <p>Name: {data.firstname} {data.lastname}</p>
                    <p>Location: {data.location} </p>
                    <p>Date: {data.date} </p>
                    <p> {data.description}</p> 
                </div>
            
            </div>
            
        );
    }
}

export default PreviewCard;

