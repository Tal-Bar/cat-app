

import React, { Component } from 'react';
import './SignUp.css'
import { Redirect, Link } from 'react-router-dom';

class SignUp extends Component {
constructor(props){
    super(props)
    this.state={
        fname:'',
        lname:'',
        pwd:'',
        img:'',
        email:'',
        type:''

    }
    this.handleInput=this.handleInput.bind(this)
    this.handleImage=this.handleImage.bind(this)
    this.handleSignUpSubmit=this.handleSignUpSubmit.bind(this)
}
handleInput(event){
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleImage(event){
    if (event.target.files && event.target.files[0]) {
        this.setState({
          img: URL.createObjectURL(event.target.files[0])
        });
      }
}

handleSignUpSubmit(){
   const data={
       fname:this.state.fname,
       lname:this.state.lname,
       email:this.state.email,
       pwd:this.state.pwd,
       img:this.state.img,
       type:this.state.type
   }
   this.props.updateUserCards(data)
}

    render() {
        const {activeUser}= this.props
        if(activeUser){
          return  <Redirect to ='/home'/>
        }
        return (
            <div className='signup-wrapper'>
                    <div className="signup-container">
                        <h2>SignUp</h2>
                        <div className='inp-container'>
                            <label>First Name</label>
                            <input name='fname' type="text" onChange={this.handleInput}/>
                        </div>

                        <div className='inp-container'>
                            <label>Last Name</label>
                            <input name='lname' type="text" onChange={this.handleInput}/>
                        </div>

                        <div className='inp-container'>
                            <label>email</label>
                            <input name='email' type="email" onChange={this.handleInput}/>
                        </div>

                        <div className='inp-container'>
                            <label>Password</label>
                            <input name='pwd' type="password" onChange={this.handleInput}/>
                        </div>

                        <div className='inp-container'>
                            <label>image</label>
                            <input name='img' type="file" onChange={this.handleImage}/>
                        </div>

                            <h3>User Type</h3>
                            <div id='user-type' className="user-radio" onChange={this.handleInput}>
                                                <input type="radio" id="feeder" name="userType" value="feeder"/>
                                                <label for="Feral cat">Feeder</label>
                                                <input type="radio" id="Cat-Catcher" name="userType" value="Cat-Catcher"/>
                                                <label for="house cat">Cat-Catcher</label>
                                                <input type="radio" id="Cat-carer" name="userType" value="Cat-carer"/>
                                                <label for="other">Cat-carer</label> 
                                            </div>
                            <Link to='/login' onClick={this.handleSignUpSubmit}>
                                <button>OK</button>
                            </Link>
                    </div>
            </div>
           
        );
    }
}

export default SignUp;