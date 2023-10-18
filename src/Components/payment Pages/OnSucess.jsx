import React, { useEffect } from 'react'
import Top from '../header/Top'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
import {addItem} from "../../feature/AddToCart";
import { useDispatch } from 'react-redux';
import axios from 'axios';
const OnSucess = () => {
    const dispatch=useDispatch();
    const baseUrl= `${import.meta.env.VITE_ULR}`;
    useEffect(
        ()=>{
          axios.post(baseUrl+"/changestocart", {
            "userId":JSON.parse(localStorage.getItem("token"))?.id,
            "productId":"clear",
            "productQnt":0
                })
                .then(res=>console.log("ram ram",res.data) )
                  dispatch(addItem(0));
                  localStorage.removeItem("cart");    
        },[]);
 
  return (
    <>
    <Top/>
     <div style={{minHeight:"500px",display:"flex",justifyContent:"center"}}>your payment is sucessfull...<br/><div>keep shoping <Link to={"/"}>Home</Link> </div> </div>
      <Footer/>
    </>
  )
}

export default OnSucess
