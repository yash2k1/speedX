import React, { useEffect, useState } from 'react';
import GenricPageHeader from '../Components/GenricPage/GenricPageHeader';
import GenricControls from '../Components/GenricPage/GenricControls';
import GenericProductGallery from '../Components/GenricPage/GenericProductGallery';
import { useLocation } from 'react-router-dom';
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import Top from '../Components/header/Top';
import Footer from '../Components/footer/Footer';
const GenericCategory = () => {
const [categoryWiseData,setCategoryWiseData]=useState("");
const info=useLocation();
const categoryParam=info.pathname;
const subCategoryQuery=info.search;

useEffect(
 ()=>{
 const baseUrl=`${import.meta.env.VITE_ULR}${categoryParam+subCategoryQuery}`;
 axios.get(baseUrl)
 .then(res=>setCategoryWiseData(res.data.msg));
 console.log("called",baseUrl)
 },[categoryParam,subCategoryQuery]
)
console.log("category page",categoryWiseData&&categoryWiseData);
// changing the view from list to gallary
const [view,setView]=useState("ProductList");
const ChangeView=(viewType)=>{
  viewType==="ProductGallary"?
  setView("ProductList")
  :setView("ProductGallary");
  
}
  return (
    <>
   {categoryWiseData?
     <>
     <Top/>
        <GenricPageHeader categoryWiseData={categoryWiseData}/>
        <GenricControls  ChangeView={ChangeView} categoryWiseData={categoryWiseData}/>
        {/* <GenricControls changeSort={changeSort} ChangeView={ChangeView} categoryWiseData={categoryWiseData}/> */}
         <GenericProductGallery view={view} categoryWiseData={categoryWiseData}/>
        <Footer/>

    </>
  :  <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>
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

export default GenericCategory
