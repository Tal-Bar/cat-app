import React, { Component } from 'react';
import './loginPage.css'
import { Redirect, Link } from 'react-router-dom';


class LoginPage extends Component {

constructor(props) {
    super(props);
    
    this.state = {
        emailInput: "",
        pwdInput: "",
        showInvalidCredentials: false,
        redirectToRecipes: false
    }

    this.login = this.login.bind(this);

    console.log(this.props.users);
}

login() {
    const {emailInput, pwdInput} = this.state;
    const {users, handleLogin} = this.props

const userFound = users.find(user => emailInput === user.email && pwdInput === user.pwd)

if (userFound) {
    handleLogin(userFound);
    this.setState ({
        redirectToRecipes: true
    })
    // alert("found");

} else  {
    this.setState({
        showInvalidCredentials: true
    })
    // alert("not found");
}

    // alert(emailInput + " " + pwdInput)
}

    render() {

const {emailInput, pwdInput, showInvalidCredentials, redirectToRecipes} = this.state

if (redirectToRecipes) {
    return <Redirect to="/home"/>
}

        return (
            <div className="p-login">
                <h2>Login to Recipe Book</h2>
                <div>or<Link to ='/signup'> Create a new account</Link></div>

                <form className="loginForm">

                {showInvalidCredentials ? <div class="alert">
                {/* <strong>Invalid Credientails! Incorrect email or password</strong>  */}
                    <div>Incorrect email or password!</div>
                </div> : null}


                    <div>
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" id="exampleInputEmail1" placeholder="example@gmail.com" value={emailInput} onChange={(e) => this.setState({emailInput: e.target.value, showInvalidCredentials: false})}/>
                    </div>
                    <div >
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" id="exampleInputPassword1" placeholder="******" value={pwdInput} onChange={(e) => this.setState({pwdInput: e.target.value})}/>
                    </div>
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile"/>
                    <input type="checkbox" id="CheckMe"/>
                    <label for="CheckMe">I agree to receive information about Canonical’s products and services.</label>
                    <div >
                        <button onClick={this.login}type="button">Log in</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default LoginPage;