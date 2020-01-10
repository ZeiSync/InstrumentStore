import React, { Component } from 'react'
import { Redirect, Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props){
    super(props);
    const token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      username : '',
      password: '',
      loggedIn : false,
      token
    }

    if(token == null) {
      this.state.loggedIn = false
    }
  }
  
  onChange =(e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    const {username, password ,token} = this.state

    if( username === token.usernamex  &&  password === token.passwordx){
        this.setState({
          loggedIn : true,
        })
        alert("Login success");
    } else{
      this.setState({
        loggedIn : false,
      })
      alert("Login fail");
    }
  }

  render() {
    if(this.state.loggedIn){
      setTimeout(()=>{
        window.location.reload(false)
      },300)

      return <Redirect to="/" />
      
    } 
    return (
      <div>
        <section className="login_box_area section-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_box_img">
                  <div className="hover">
                    <h4>New to our website?</h4>
                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                    <Link  className="button button-account" to="/register">Create an Account</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login_form_inner">
                  <h3>Log in to enter</h3>

                  <form onSubmit={this.submitForm} className="row login_form" action="#/" id="contactForm">

                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" id="name" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange} required />
                      </div>


                      <div className="col-md-12 form-group">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required />
                      </div>

                      <div className="col-md-12 form-group">
                        <div className="creat_account">
                          <input type="checkbox" id="f-option2" name="selector" />
                          <label htmlFor="f-option2">Keep me logged in</label>
                        </div>
                      </div>

                      <div className="col-md-12 form-group">
                        <button type="submit" value="submit" className="button button-login w-100" >Log In</button> 
                        
                        <a href="#">Forgot Password?</a>
                      </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
