import React,  { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {  connect } from 'react-redux'
import { loginUser } from '../actions'

class Login extends Component {
    state = { email: "", password: ""}

        handleEmailChange = ({ target }) => {
            this.setState({ email: target.value })
        }
    
      handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value })
      }
    
      handleSubmit = (event) => {
        const { dispatch } = this.props
        const { email, password } = this.state
    
        dispatch(loginUser(email, password))
        console.log(this.state)
        event.preventDefault()
      };
    render(){
        const { loggedIn, loginError } = this.props
        if(loggedIn) {
            return <Redirect to="/" />
        } else {
        return(
            <div className="row">
                <div className="col s3"></div>
                <div className="col s6 m6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <input id="email" name = "email" type="email" className="validate" onChange={this.handleEmailChange} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                    <input id="password" name = "password" type="password" className="validate" onChange={this.handlePasswordChange} />
                    <label htmlFor="password">Password</label>
                    </div>
                    {loginError && (
                    <p className="errorText">
                        Incorrect email or password.
                    </p>
                    )} 
                    <button className="waves-effect waves-light btn">login</button>
                    </form>
                </div>
                
                <div className="col s3"></div>
            </div>
        )}
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn,
        loginError: state.auth.loginError
    }
}

export default connect(mapStateToProps)(Login)
