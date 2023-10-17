import React, { useMemo, useRef, useState } from 'react'
import './GenricControlsStyle.css'
import AppsIcon from '@mui/icons-material/Apps';
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation, useNavigate } from 'react-router-dom';

const GenricControls = ({ChangeView,categoryWiseData}) => {
  const info=useLocation();
  const categoryParam=info.pathname;
  const subCategoryQuery=info.search;
  let url=categoryParam+subCategoryQuery; 
  
  console.log("sfsf",url) 
  // console.log("ree",import.meta.env.VITE_ULR)
  // const ChangeView=(viewType)=>{
  //   setView(viewType=>viewType==="ProductGallary"?"ProductList":"ProductGallary")
  // }
  // <div className='sortProduct' htmlFor="sortBy">SortBy 
  //     <select id=' sortBy' className="sortBy">
  //   <option value="sortByHighDiscount">highDiscount</option>
  //   <option value="sortByPriceLtoH">Price low to high</option>
  //   <option value="sortByPriceHtoL">Price hight to low</option>
  //   <option value="sortByRating">Rating</option>
  //     </select>
  //     </div>
  const[selected,setSelected]=useState("none");
  const navSortByArrow=useRef();
  const navigate=useNavigate();

  const sortBy=(query)=>{
if(url.includes("sortBy")){
  url=url.slice(0,url.indexOf("sortBy"));
 console.log(url);}

if(url.includes("?"))navigate(`${url}&${query}`);
else navigate(`${url}?${query}`);
  }
  return (
    <>
   {categoryWiseData&& <div className='controls'>
    <div className="leftControls">
      <div className="totalProduct">{categoryWiseData?.length +" Item "}</div>
      
      <div   className="sortProduct">
              
              <div className="navRegisterBtn" onClick={()=>{
                      console.log("to login")
                      navigate(`/${categoryWiseData[0].category}`)}}>SortBy
                      </div>
                    
                <div className="dropDownArrow"
                  onClick={(e)=>{
                    console.log( e.target)
                    selected==="flex"?
                    navSortByArrow.current.style.transform="rotate(0deg)":
                    navSortByArrow.current.style.transform="rotate(180deg)";
                    setSelected(selected=>selected==="flex"?"none":"flex")
                    
                  }}
                ><ArrowDropDownIcon ref={navSortByArrow} style={{height:"100%"}}/>
                </div>
                  <div className="dropDown" style={{display:selected}} >
                  <div className="navRegisterOption"
                  onClick={()=> { 
                    setSelected("none");
                    navSortByArrow.current.style.transform="rotate(0deg)";
                    sortBy(`sortBy=highDiscount`);
                  }}
                  >HighDiscount</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected("none");
                  navSortByArrow.current.style.transform="rotate(0deg)";
                  sortBy(`sortBy=priceLtoH`);
              }}
                >PriceLtoH</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected("none");
                  navSortByArrow.current.style.transform="rotate(0deg)";
                  sortBy(`sortBy=priceHtoL`)
              }}
                >PriceHtoL</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected("none");
                  navSortByArrow.current.style.transform="rotate(0deg)";
                  sortBy(`sortBy=rating`);
                  // navigate(`${url}?sortBy=rating`);
              }}
                >Rating</div>
              
                  </div>
               
                
        </div>
      </div>
    
    

    <div className="Orientation">
<div className="gallary" onClick={()=>ChangeView("ProductList")}><AppsIcon/></div>
{/* <div className="gallary" onClick={()=>ChangeView("ProductGallary")}><AppsIcon/></div> */}
<div className="list" onClick={()=>ChangeView("ProductGallary")}><ReorderIcon/></div>
    </div>

    </div>}
    </>
  )
}

export default GenricControls
