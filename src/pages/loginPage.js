import React, { Component } from "react";
import "./loginPage.css";
import { Redirect, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: "",
      pwdInput: "",
      showInvalidCredentials: false,
      redirectToRecipes: false,
    };

    this.login = this.login.bind(this);

    console.log(this.props.users);
  }

  login() {
    const { emailInput, pwdInput } = this.state;
    const { users, handleLogin } = this.props;

    const userFound = users.find(
      (user) => emailInput === user.email && pwdInput === user.pwd
    );

    if (userFound) {
      handleLogin(userFound);
      this.setState({
        redirectToRecipes: true,
      });
      // alert("found");
    } else {
      this.setState({
        showInvalidCredentials: true,
      });
      // alert("not found");
    }

    // alert(emailInput + " " + pwdInput)
  }

  render() {
    const {
      emailInput,
      pwdInput,
      showInvalidCredentials,
      redirectToRecipes,
    } = this.state;
    const { activeUser, handleLogout } = this.props;
    if (redirectToRecipes) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <Navbar activeUser={activeUser} handleLogout={handleLogout} />
        <div className="login-wrapper">
          <div className="login-container">
            <h2>Login to Street Cat</h2>
            <div>
              or<Link to="/signup"> Create a new account</Link>
            </div>

            <form className="loginForm">
              {showInvalidCredentials ? (
                <div class="alert">
                  <div>Incorrect email or password!</div>
                </div>
              ) : null}

              <div className="login-inp-container">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  id="exampleInputEmail1"
                  placeholder="example@gmail.com"
                  value={emailInput}
                  onChange={(e) =>
                    this.setState({
                      emailInput: e.target.value,
                      showInvalidCredentials: false,
                    })
                  }
                />
              </div>
              <div className="login-inp-container">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  id="exampleInputPassword1"
                  placeholder="******"
                  value={pwdInput}
                  onChange={(e) => this.setState({ pwdInput: e.target.value })}
                />
              </div>
              {/* <label for="exampleInputFile">File input</label>
                        <input type="file" id="exampleInputFile"/>
                        <input type="checkbox" id="CheckMe"/>
                        <label for="CheckMe">I agree to receive information about Canonical’s products and services.</label> */}
              <div className="login-btn-container">
                <button
                  className="login-btn"
                  onClick={this.login}
                  type="button"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
