import React, { Component } from 'react';
import Navbar from '../conponents/Navbar';
import { Redirect } from 'react-router-dom';
import './F-card.css'

class FCardPage extends Component {
    constructor(props){
        super(props)
        this.RedirectToNewFCard=this.RedirectToNewFCard.bind(this)
        this.handleInput=this.handleInput.bind(this)
        this.handleImage=this.handleImage.bind(this)
        this.state ={
            cardRoute:'',
            type:'',
            firstname:'',
            lastname:'',
            location:'',
            phone:'',
            from:'',
            to:'',
            feedingTime:'',
            numberOfCats:'',
            text:'',
            photo:'',
            status:'open'
        }
    }
    handleInput(event){
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleImage(event){
        if (event.target.files && event.target.files[0]) {
            this.setState({
              photo: URL.createObjectURL(event.target.files[0])
            });
          }
    }

    RedirectToNewFCard(){
        //function to callect all the data we entered
        const data ={
            type:this.state.type,
            ftname:this.state.firstname,
            lname:this.state.lastname,
            location:this.state.location,
            phone:this.state.phone,
            from:this.state.from,
            to:this.state.to,
            'feeding-time':this.state.feedingTime,
            'number-of-cats':this.state.numberOfCats,
            text:this.state.text,
            img:this.state.photo,
            status:this.state.status,
        
        }
        this.props.updateNewFcard(data)
       this.setState({...this.state,cardRoute:'newFCard'})
    }


    render() {
        const {activeUser, handleLogout} = this.props;
        switch (this.state.cardRoute) {
            case 'newFCard':
                return <Redirect to ='/new-f-card'/>
            default:
                break;
        }
        if (!activeUser) {
            return <Redirect to="/"/>
        }
        return (
            <div id="fcard">
                 <Navbar activeUser={activeUser} handleLogout={handleLogout}/>
    

               <div className="f-wrapper">
               
                  
                        <div className="contact-form">
                        <div className="form-title2"><h3>Shift Change in Feeding station</h3></div>
                        <div className="fcard-main">
                            <div className="input-fields">
                                <label for="other">First Name</label> 
                                <input type="text" className="input" placeholder=""onChange={this.handleInput} name='firstname'/>
                                <label for="other">Last Name</label> 
                                <input type="text" className="input" placeholder=""onChange={this.handleInput} name='lastname'/>
                                <label for="other">Location</label> 
                                <input type="text" className="input" placeholder=""onChange={this.handleInput} name='location'/>
                                <label for="other">Phone</label> 
                                <input type="text" className="input" placeholder=""onChange={this.handleInput} name='phone'/>
                                <label for="other">From</label> 
                                <input type="date" className="input" placeholder=""onChange={this.handleInput} name='from'/>
                                <label for="other">To</label> 
                                <input type="date" className="input" placeholder=""onChange={this.handleInput} name="to"/>
                                <label for="other">Feeding Time</label> 
                                <input type="time" className="input" placeholder=""onChange={this.handleInput} name='feedingTime'/>
                                <label for="other">Number of cats</label> 
                                <input type="text" className="input" placeholder=""onChange={this.handleInput} name='numberOfCats'/>
                            </div>

                            <div className="msg">
                                    <label for="other">Enter your msg</label> 
                                <textarea placeholder="Enter your msg here..." name='text' onChange={this.handleInput}></textarea>
                                    <div >
                                        <label  for="exampleInputFile">Add Photo</label>
                                        <input type="file" id="InputFile2" onChange={this.handleImage}/>
                                    </div>
                                {/* <div className="btn">Send</div> */}
                                <button className="f-btn" onClick={this.RedirectToNewFCard}>Send</button>

                            </div>
                            </div>
                   </div>
                </div>

            </div>
        );
    }
}

export default FCardPage;