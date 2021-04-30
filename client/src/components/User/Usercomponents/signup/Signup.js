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
          
        }
        else if(Name.length>=4)
        {
            
        }
    }
   

    if(event.target.name==='phone')
    {
        console.log("enetered",event.target.name);
        const Phone=event.target.value
        setPhone(Phone)
        if(Phone.length<10 || Phone.length>10)
        {
          
        }
        else
        {
          
        }
    }
    else
    {
       
    }



if(event.target.name==='password')
{
    const Password=event.target.value
    setPassword(Password)
}
}

function submitForm(){


    // console.log("to submit");
    // setName('')
    // setPhone('')
    // setPassword('')

let formData={
    Name:Name,
    Phone:Phone,
    Password:Password
}

if(formData.Name.length>=4&&formData.Phone.length!=10&&formData.Password.length>=4)
{

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

else
{

  if(Name.length<4)
  {
    toast("please enter name of atleast 4 characters")
  }
  if(Phone.length!=10)
  {
    toast('please give 10 digit mobile number')
  }
  if(Password.length<4)
  {
    toast("please enter atleast 4 digit password")
  }
}


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
                  src="data:image/png;base64,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"
                  className="logo"
                />{" "}
              </div>
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                {" "}
                <img
                  src="data:image/png;base64,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"
                  className="thumbnail"
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
                <button type="submit" className=" btn-blue text-center" onClick={submitForm}>
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


