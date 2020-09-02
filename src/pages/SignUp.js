

import React, { Component } from 'react';
import './SignUp.css'
import { Redirect, Link, withRouter } from 'react-router-dom';


class SignUp extends Component {
constructor(props){
    super(props)
    this.state={
        fname:'',
        lname:'',
        pwd:'',
        img:'',
        email:'',
        type:'',
        showInvalidCredentials: false,

    }
    this.handleInput=this.handleInput.bind(this)
    this.handleImage=this.handleImage.bind(this)
    this.handleSignUpSubmit=this.handleSignUpSubmit.bind(this)
}
handleInput(event){
    this.setState({
        [event.target.name]:event.target.value
    })
    if(event.target.name=='type'){
        console.log("type",event.target.value)
    }
}

handleImage(event){
    if (event.target.files && event.target.files[0]) {
        this.setState({
          img: URL.createObjectURL(event.target.files[0])
        });
      }
}

handleSignUpSubmit(){
    if(this.state.email=='' || this.state.pwd==''){
        this.setState({showInvalidCredentials:true})
    }else{
        const data={
           fname:this.state.fname,
           lname:this.state.lname,
           email:this.state.email,
           pwd:this.state.pwd,
           img:this.state.img,
           type:this.state.type
       }
       this.props.updateUserCards(data)
       this.props.history.push('/login')
    }
   
}

    render() {
        const {activeUser}= this.props
        if(activeUser){
          return  <Redirect to ='/home'/>
        }
        return (
           
            <div className="signup-wrapper">
                    <div className="signup-container">
                        <h2>Sign Up</h2>
                            {
                                this.state.showInvalidCredentials ? <div className="alert">
                                <div>Please Enter email and password!</div>
                                </div> : null
                            }
                        <div className="inp-container">
                            <label>First Name</label>
                            <input name='fname' type="text" onChange={this.handleInput}/>
                        </div>
                        <div className="inp-container">
                            <label>Last Name</label>
                            <input name='lname' type="text" onChange={this.handleInput}/>
                        </div>
                        <div className="inp-container">
                            <label>Email</label>
                            <input name='email' type="email" onChange={this.handleInput}/>
                        </div>
                        <div className="inp-container">
                            <label>Password</label>
                            <input name='pwd' type="password" onChange={this.handleInput}/>
                        </div>
                        <div className="inp-container">
                            <label>Image</label>
                            <input className="img-input" name='img' type="file" onChange={this.handleImage}/>
                        </div>

                            <h5>Main Activity</h5>
                            <div id='user-type' className="user-radio" onChange={this.handleInput}>
                                                <input type="radio" id="feeder" name="type" value="feeder"/>
                                                <label for="Feral cat">Cat-Feeder</label>
                                                <input type="radio" id="Cat-Catcher" name="type" value="Cat-Catcher"/>
                                                <label for="house cat">Cat-Catcher</label>
                                                <input type="radio" id="Cat-carer" name="type" value="Cat-carer"/>
                                                <label for="other">Cat-Foster</label> 
                                            </div>
                           
                                <button className="signup-btn"  onClick={this.handleSignUpSubmit}>OK</button>
                    </div>
            </div>
            
           
        );
    }
}

export default withRouter(SignUp);