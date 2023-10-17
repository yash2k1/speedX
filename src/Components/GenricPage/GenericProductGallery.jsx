import React, { useState } from 'react'
import './GenericProductGalleryStyle.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate, useParams } from 'react-router-dom';
import StartRating from '../StartRating';

const GenericProductGallery = ({view,categoryWiseData}) => {
  const navigate=useNavigate();
const categoryParam=useParams();
const toViewProduct=(id)=>{
  navigate(`/${categoryParam.category}/${id}`);
  console.log("to singlePage")
}
console.log("to singlePage", categoryWiseData&&Math.floor(categoryWiseData?.length/8))
const [productToShow,setProductToShow]=useState(0);
const ChangePage=(num)=>{
if(num>0){
 ( productToShow*8<=categoryWiseData?.length-8)&&setProductToShow(productToShow+num);
}
else{
 ( productToShow>0)&&setProductToShow(productToShow+num);
}
}
console.log(productToShow)
//  smooth scrolling
const handleScroll=()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
  return (
    <>
    <div className={view}>
      {
     categoryWiseData  && categoryWiseData?.slice(productToShow*8,(productToShow*8)+8)?.map((item)=>{
      return(
          <div className="Product" key={item.id}>
          <img className="ProductImg hover" onClick={()=>{
            handleScroll();
            toViewProduct(item.id)
            }} src={item.thumbnail} alt="not found" />
       <div className="Productdetaile">
       <div className="ProductTittle hover"  onClick={()=>{
        handleScroll();
        toViewProduct(item.id)
        }}>{item.title}
       <span className="ProductDiscription">{" | "+item.description.slice(0,30)+"..."}</span></div>
       {/* <div className="ProductTittle">{item.description}</div> */}
    {/* star Rating */}

      <StartRating className="ProductRating" rating={item.rating}/>
  <div className="ProductPrice">
    <span className='ProductPriceActural'>    <CurrencyRupeeIcon className='currencyrupee1' />{(item.price*(100-item.discountPercentage)).toFixed(2)} </span>
    <span className='ProductDiscountedPrice'> <CurrencyRupeeIcon className='currencyrupee2'  /> {item.price*100}</span>
    <span className='ProductDiscounted'> {"("+item.discountPercentage+"% off)"}</span>

    </div>
 {/* view more */}
 <button className=" ProductViewMore hover" onClick={()=>{
  handleScroll();
  toViewProduct(item.id)
  }}>
            <div className="ProductViewMoreBg" ></div>
               <span className="ProductViewMoreText"  >View Product</span>
                </button>
       </div>
 
           </div>
      )
          }
        )
      }
     
    </div>
   { categoryWiseData  && 
  
    <div className="pages">
       { productToShow===0?
        <div className="pagesNumber" onClick={()=>{ChangePage(-1)}}  style={{background:"rgb(162, 161, 161)"}}>prev</div>
        :<div className="pagesNumber" style={{backgroundColor:"var(--primaryColor)"}} onClick={()=>{ChangePage(-1)}}>prev</div>
        }
        {
          
          [...Array(Math.floor(categoryWiseData.length/8)+1)].map((item,index)=>{

         return index===productToShow? <div key={index}style={{background:"var(--primaryColor)"}} className="pagesNumber" onClick={()=>{setProductToShow(index)}}>{index+1}</div>
         : <div key={index} style={{background:"var(--SecondaryColor)"}} className="pagesNumber" onClick={()=>{setProductToShow(index)}}>{index+1}</div>
         
          })
        }
       { categoryWiseData?.length<=productToShow*8+8?
        <div className="pagesNumber" onClick={()=>{ChangePage(1)}}  style={{background:"rgb(162, 161, 161)"}}>Next</div>
        :<div className="pagesNumber" style={{backgroundColor:"var(--primaryColor)"}} onClick={()=>{ChangePage(1)}}>Next</div>
        }
      </div>
      
      }
    </>
 
  )
}

export default GenericProductGallery
