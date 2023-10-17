import React, { useEffect, useState } from 'react'
import Top from '../Components/header/Top'
import MainImageSlider from '../Components/Main Image Slider/MainImageSlider'
import Varieties from '../Components/Categories/Varieties'
import NewArrival from '../Components/new arival/NewArrival'
import Wrapper from '../Components/flip cards/Wrapper'
import Footer from '../Components/footer/Footer'
import Annocument from '../Components/annocument/Annocument'
import axios from 'axios'
import LoadingSpin from 'react-loading-spin'

const Home = () => {
  const [subCategoryWiseData,setSubCategoryWiseData]=useState("");
  useEffect(
   ()=>{
   const baseUrl=`${import.meta.env.VITE_ULR}/uniqueSubCategory`;
   axios.get(baseUrl)
   .then(res=>setSubCategoryWiseData(res.data.msg));
   },[]
  )
console.log("home",subCategoryWiseData&&subCategoryWiseData);

  return (
    <>
{subCategoryWiseData?
<>
      <Top/>
      <MainImageSlider subCategoryWiseData={subCategoryWiseData}/>
      <NewArrival subCategoryWiseData={subCategoryWiseData}/>
       <Varieties subCategoryWiseData={subCategoryWiseData}/>
     <Annocument/>
      <Wrapper/>
      <Footer/>
</>
      :
      <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>
   <LoadingSpin
          duration="3s"
           timingFunction="ease-in"
           primaryColor="#4A55A2"
           secondaryColor="white"
           numberOfRotationsInAnimation={2}/>
   </div>
      }
    </>
  )
}

export default Home
