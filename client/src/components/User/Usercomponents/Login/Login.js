import React, { Component, useEffect, useState } from "react";
import "../Login/Login.css";
import { main } from "react-bootstrap";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import Server from "../../../../Server";
import { Link } from "react-router-dom";

export default function Login() {
  let history = useHistory();

useEffect(()=>{
  let token=localStorage.getItem('jwt')
  if(token)
  {
    history.push('/home')
  }
})

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function submitForm() {

    let formData = {
      Phone: phone,
      Password: password,
    };

    console.log("fororasld", formData);


axios.post(Server+'/Login',formData).then((response)=>{
console.log("res",response);
   
if(response)
{
localStorage.setItem('jwt',response.data.jwtToken)
localStorage.setItem('user',response.data.user)
localStorage.setItem('userId',response.data.id)

history.push('/home')
}

}).catch((err)=>{
    if(err.response.status==400)
    {
        
    console.log("this is err",err.response.data);
        toast(err.response.data)
    }

})


  }

  function handleChange(event) {
    if (event.target.name == "phone") {
      const Phone = event.target.value;

      setPhone(Phone);
      if (Phone.length != 10) {
        toast("please enter 10 digit mobile number");
      }
    }
    if(event.target.name=='password')
    {
        const Password=event.target.value
        setPassword(Password)
    }

    console.log("mm");
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
                    src="data:image/jpeg;base64,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"
                  className=""
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <h2 className="Title"> Yo! PODCAST</h2>
                <div className="title ">



                  </div>
                  {/* <div className="fa fa-facebook"><img src="">
                  
                  </img> </div> */}
                {/* </div> */}
                {/* <div className="twitter text-center mr-3"> */}
                  {/* <div className="fa fa-twitter"></div> */}
                {/* </div> */}
                {/* <div className="linkedin text-center mr-3"> */}
                  {/* <div className="fa fa-linkedin"></div> */}
                {/* </div> */}
              </div>
              <div className="">
         
                <small className="or text-center"> <p className="tagline">Share | Play | Have Fun!</p>   </small>
              
              </div>
              <div className="row px-3">
                {" "} 
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Phone Number</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="number"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="row px-3 mb-4">
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input
                    id="chk1"
                    type="checkbox"
                    name="chk"
                    className="custom-control-input"
                  />{" "}
                  {/* <label for="chk1" className="custom-control-label text-sm">
                    Remember me
                  </label>{" "} */}
                </div>{" "}
                <a href="#" className="ml-auto mb-0 text-sm">
                  Forgot Password?
                </a>
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className=" btn-blue text-center"
                  onClick={submitForm}
                >
                  Login
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <a className="text-danger "> <Link to='/signup'> Register </Link></a>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-violet py-4">
          <div className="row px-3">
            {" "}
            <small className="ml-4 ml-sm-5 mb-2">
            
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
