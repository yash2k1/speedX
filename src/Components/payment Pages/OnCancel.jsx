import React from 'react'
import Top from '../header/Top'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

const OnCancel = () => {
  return (
    <>
    <Top/>
     <div style={{minHeight:"500px",display:"flex",justifyContent:"center"}}>your payment is pending...<br/><div>keep shoping <Link to={"/"}>Home</Link> </div> </div>
      <Footer/>
    </>
  )
}

export default OnCancel
