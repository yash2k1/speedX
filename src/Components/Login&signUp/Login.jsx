import React, { useEffect, useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { ToastContainer, toast } from 'react-toastify';
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Top from "../header/Top";
import CloseIcon from '@mui/icons-material/Close';
import Footer from "../footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_ULR}/Login`;
    // const baseUrl = "https://blog-server-mm8b.onrender.com/Login";
    // const baseUrl = "http://localhost:4040/Login";
    
    axios.post(baseUrl, formData).then((res) => {
      setResponse(res.data);
    });
  }, [submit]);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
// form validation
    if ( formData.email.length == 0 ){
      setResponse({ mess: "Enter your email" });
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      setResponse({ mess: "Invalid email address" });
    }
    else if(formData.password.length == 0 ){
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
 
  const tostNotify=()=>toast("you are login in");
  
  response.token&&(function goToDashboard  (){
    tostNotify();
    setTimeout(()=>{
      setFromData({
        email: "",
        password: "",
      })
     
      localStorage.setItem("token", JSON.stringify({...response}));
      navigate("/");
      
    },2000) 
  }
  )();
  
  return (
    <>
  
    
        <Top/>
    <div className="registration">
     
        <div className="registerContainer loginContainer">
          <img className="registerImg" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="not found" />
       

          <form className="register">
            <h1 className="registerHeading">Login Page</h1>
          
        
            <fieldset>
              <legend>Email</legend>
              {/* Email and Password */}
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
           { response.mess &&  <div className="message"><CloseIcon style={{color:"red"}}/>{response && response.mess}</div>}
            <button className="registerButton " onClick={handleClick}>
              Login 
            </button>
            <div className="goto">
              go to <Link className="link" to={"/SignUp"}>Register page</Link>
            </div>
          </form>
        </div>
     
    </div>
    <Footer/>
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
    </>

  );
};

export default Login;
