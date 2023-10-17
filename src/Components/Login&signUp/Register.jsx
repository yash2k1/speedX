import React, { useEffect, useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Registration.css";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Top from "../header/Top";
import Footer from "../footer/Footer";
const Register = () => {
  const navigate=useNavigate();
  const [formData, setFromData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_ULR}/signUp`;
    // const baseUrl="https://blog-server-mm8b.onrender.com/Register";
    // const baseUrl="http://localhost:3030/signUp";
    axios.post(baseUrl, formData).then((res) => {
      setResponse(res.data);
    });
    setFromData({
      name: "",
      phoneNo: "",
      email: "",
      password: "",
    });
  }, [submit]);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    // form validation
    if (formData.name.length === 0){
      setResponse({ mess: "Enter your name" });
    }
    else if (formData.name.split(" ").length <2){
      setResponse({ mess: "Enter your full name Name" });
    }
    else if( formData.phoneNo.length <9 || formData.phoneNo.length >13 ){
      setResponse({ mess: "enter a valid phone number" });
    }
   else if ( formData.email.length === 0 ){
      setResponse({ mess: "Enter your email" });
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      setResponse({ mess: "Invalid email address" });
    }
    else if(formData.password.length === 0 ){
      setResponse({ mess: "Enter your password" });
    }
    else if(formData.password.length <6 || formData.password.length >16 ){
      setResponse({ mess: "password length must be of 6-15 characters" });

    }
   
    else {
      setSubmit(!submit);
    } 
    setTimeout(()=>{
      setResponse("");
    
     },2000)
  };
  const tostNotify=()=> toast("Registration successfull");
  
  response.token&&(function goToDashboard  (){
    tostNotify();
    setTimeout(()=>{
      navigate("/Login");
    },2000) 
  }
  )();
  return (
    <>
    <Top/>
   
    <div className="registration">
      <div className="registerContainer">
      <img className="registerImg" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="not found" />
        
        <form className="register">
          <h1 className="registerHeading">Registration Page</h1>
          <fieldset>
            <legend>Name</legend>
            {/* Name, Phone, Email and Password */}
            {/* <PersonIcon/> */}
            <PersonOutlineOutlinedIcon/>
            <input
              type="text"
              name="name"
              className="nameInput"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Phone number</legend>
            {/* Name, Phone, Email and Password */}
            {/* <LocalPhoneIcon/> */}
            <LocalPhoneOutlinedIcon/>
            <input
              type="text"
              name="phoneNo"
              className="phoneNoInput"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your Phone number"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            {/* Name, Phone, Email and Password */}
            {/* <EmailIcon/> */}
            <EmailOutlinedIcon/>
            <input
              type="email"
              name="email"
              className="emailInput"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              required
              />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            {/* Name, Phone, Email and Password */}
            {/* <LockIcon/> */}
            <LockOutlinedIcon/>
            <input
              type="password"
              name="password"
              className="passwordInput"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              required
            />
          </fieldset>
          {/* <div className="mess">Your are already registered</div> */}
          {response.mess &&<div className="message"><CloseIcon style={{color:"red"}}/> {response && response.mess}</div>}
          <button className="registerButton" onClick={handleClick}>
            Submit
          </button>
          <div className="goto" >
            go to <Link className="link" to={"/Login"}>Login page</Link>
          </div>
        </form>
      </div>
    </div>
        
    <ToastContainer 
    position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
             
             <Footer/>
              </>

  );
};

export default Register;
