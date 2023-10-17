import React from 'react'
import { Link } from 'react-router-dom'
import Top from '../header/Top'
import Footer from '../footer/Footer'

const FallBack = () => {
    console.log("log",  JSON.parse(localStorage.getItem("token"))?.id)
  return (
    <>
      <Top/>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h3>you are not login yet</h3> 
      <p>  create your account <Link to="/signUp"style={{color:"blue",textDecoration:"underLine"}}>signUp</Link> </p>
      <p style={{marginBottom:"150px"}}>  Or login <Link to="/login" style={{color:"blue",textDecoration:"underLine"}}>Login</Link> </p>
    </div>
    <Footer/>
</>
  )
}

export default FallBack
