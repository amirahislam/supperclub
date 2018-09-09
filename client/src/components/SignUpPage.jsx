import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../pages/Signup/Signup';

import { Link } from 'react-router-dom';

const SignUpPage = props => (
            <div id="login-page">
            <div className="container">
            
                <form className="form-login" action="index.html">
                  <h2 className="form-login-heading">sign up now</h2>
                  <div className="login-wrap">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleInputChange}
                        type="firstName"
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="lastName" className="form-control" id="lastName" placeholder="Last Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                <label className="" htmlFor="inlineFormInputGroup">Username</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                    {/* <div className="input-group-text">@</div> */}
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Image</label>
                    <input type="lastName" className="form-control" id="lastName" placeholder="Image (URL)"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Chef/Patron</label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">Chef</option>
                    <option value="2">Patron</option>
                    {/* <option value="3">Three</option> */}
                </select>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            
            </div>
            </form>
            </div>
            </div>      
)

export default SignUpPage;