import React, { Component, useState } from "react";
import "../Login/Login.css";
import {  } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import Server from '../../../../Server'
import { toast } from "react-toastify";

export default function Signup() {


const [Name,setName]=useState('')
const [Phone,setPhone]=useState('')
const [Password,setPassword]=useState('')



let history=useHistory()




function handleChange(event){
    let err=false

    if(event.target.name==='name')
    {
        const Name=event.target.value
        console.log("name is this,Name",Name);
        setName(Name)
        if(Name.length<4)
        {
            console.log("mm");
            document.getElementById('Nameerr').innerHTML='enter atleast 4 characters'


        }
        else if(Name.length>=4)
        {
            document.getElementById('Nameerr').innerHTML=''
        }
    }
   

    if(event.target.name==='phone')
    {
        console.log("enetered",event.target.name);
        const Phone=event.target.value
        setPhone(Phone)
        if(Phone.length<10 || Phone.length>10)
        {
            document.getElementById('phoneErr').innerHTML='enter 10 digit Number'
        }
        else
        {
            document.getElementById('phoneErr').innerHTML=''
        }
    }
    else
    {
        console.log("falsk");
    }



if(event.target.name==='password')
{
    const Password=event.target.value
    setPassword(Password)
}
}

function submitForm(){


    console.log("to submit");
    setName('')
    setPhone('')
    setPassword('')

let formData={
    Name:Name,
    Phone:Phone,
    Password:Password
}
console.log("form",formData)


axios.post(Server + '/signup', formData).then((response) =>{

  console.log("resoinse",response);

  if(response.data=='exist')
  {


    console.log("already existss");
    toast('Error the phone number already exists')
  }
  else if(response.data=='ok')
  {
    console.log("oookkosk");
    toast('sigup successfull Login Now')
    history.push('/login')
  }

})



}









  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row">
                {" "}
                <img
                  src="https://i.imgur.com/CXQmsmF.png"
                  className="logo"
                />{" "}
              </div>
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                {" "}
                <img
                  src="https://i.imgur.com/uNGdWHi.png"
                  className="image"
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Create an Account with</h6>
                <div className="facebook text-center mr-3">
                  <div className="fa fa-facebook"></div>
                </div>
                <div className="twitter text-center mr-3">
                  <div className="fa fa-twitter"></div>
                </div>
                <div className="linkedin text-center mr-3">
                  <div className="fa fa-linkedin"></div>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line"></div>{" "}
                <small className="or text-center">Or</small>
                <div className="line"></div>
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Enter Your Full Name</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Full name" onBlur={handleChange}
                />{" "}
                <p id="Nameerr"></p>
              </div>

              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Phone Number</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter a valid Phone number" onChange={handleChange}
                />{" "}
                <p id="phoneErr"></p>
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">New Password</h6> 
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password" onChange={handleChange}
                />{" "}
              </div>
              <div className="row px-3 mb-4">
                <div className="custom-control custom-checkbox custom-control-inline">
                  {" "}
                  <input
                    id="chk1"
                    type="checkbox"
                    name="chk"
                    className="custom-control-input"
                  />{" "}
                  <label for="chk1" className="custom-control-label text-sm">
                    Remember me
                  </label>{" "}
                </div>{" "}
                <a href="#" className="ml-auto mb-0 text-sm">
                  Forgot Password?
                </a>
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button type="submit" className="btn btn-blue text-center" onClick={submitForm}>
                  Create Account Now
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <a className="text-danger ">Register</a>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue py-4">
          <div className="row px-3">
            {" "}
            <small className="ml-4 ml-sm-5 mb-2">
              Copyright &copy; 2019. All rights reserved.
            </small>
            <div className="social-contact ml-4 ml-sm-auto">
              {" "}
              <span className="fa fa-facebook mr-4 text-sm"></span>{" "}
              <span className="fa fa-google-plus mr-4 text-sm"></span>{" "}
              <span className="fa fa-linkedin mr-4 text-sm"></span>{" "}
              <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


