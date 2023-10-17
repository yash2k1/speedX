import React from 'react'
import Top from '../Components/header/Top'
import SingleProduct from '../Components/singlePage/Product/SingleProduct'
import SinglePageSlider from '../Components/singlePage/Slider/SinglePageSlider'
import Footer from '../Components/footer/Footer'
import Wrapper from "../Components/flip cards/Wrapper"
import FallBack from '../Components/Login&signUp/FallBack'
const SinglePage = () => {

  return (
    <>
 {  localStorage.getItem("token")?
  <>
    <Top/>
      <SingleProduct/>
      <SinglePageSlider/>
      <Footer/>
    </>
    :
    <FallBack/>
  }
    </>
  )
}

export default SinglePage
