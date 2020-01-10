import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      emailAddress: '',
      password :'',
      allVal: false
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    const {username, emailAddress, password} = this.state;
    localStorage.setItem("token", JSON.stringify({
      usernamex : username,
      emailAddressx : emailAddress,
      passwordx : password
    }))
    this.setState({
      allVal : true
    })
  }

  render() {

    if(this.state.allVal) {
      
      return <Redirect to="/login" />
    }
    return (
      <div>
        <section className="login_box_area section-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_box_img">
                  <div className="hover">
                    <h4>Already have an account?</h4>
                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                    <Link className="button button-account" to="/login">Login Now</Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login_form_inner register_form_inner">
                  <h3>Create an account</h3>
                  <form onSubmit={this.submitForm}  className="row login_form" action="#/" id="register_form">
                    <div className="col-md-12 form-group">
                      <input type="text" className="form-control" id="name" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange} required />
                    </div>
                    <div className="col-md-12 form-group">
                      <input type="email" className="form-control" id="email" name="emailAddress" placeholder="Email Address"  value={this.state.emailAddress} onChange={this.onChange} required/>
                    </div>
                    <div className="col-md-12 form-group">
                      <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required />
                    </div>
                    {/* <div className="col-md-12 form-group">
                      <input type="text" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Confirm Password'" />
                    </div> */}
                    <div className="col-md-12 form-group">
                      <div className="creat_account">
                        <input type="checkbox" id="f-option2" name="selector" />
                        <label htmlFor="f-option2">Keep me logged in</label>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <button type="submit" value="submit" className="button button-register w-100">Register</button>
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
