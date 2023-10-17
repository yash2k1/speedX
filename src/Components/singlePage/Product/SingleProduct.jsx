import React, { useEffect, useState } from 'react';
import './SingleProductStyle.css';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import StartRating from '../../StartRating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {addItem} from "../../../feature/AddToCart";
import { useDispatch } from 'react-redux';
const SingleProduct = () => {
  const dispatch=useDispatch();
  const {category,id}=useParams();
  // console.log(category,id);
    let [currentIndex, setIndex]=useState(0);
    const [productData,setProductData]=useState("");
    const baseUrl= `${import.meta.env.VITE_ULR}`;
    const [productQnt,setProductQnt]=useState({
      "productId":"",
      "productQnt":"0"
    });
    // const [id]=useState("");
    useEffect(
     ()=>{
      const Token=JSON.parse(localStorage.getItem("token")).token;
     
     axios.get(`${baseUrl}/${category}/${id}`,{
      headers:{
          "authorization":"bearer "+Token
               }
  })
     .then(res=>{
      
      if(res?.data?.err==="token expired"){
        localStorage.removeItem('cart')
        localStorage.removeItem('token')
          }
          setProductData(res.data.msg);
    });
     },[id]
    )
    // function for slider
    const updateSilder=(val)=>{
      let n=productData?.images?.length;
      productData.images?
         setIndex(currentIndex=>(currentIndex+val+n)%n):
         setIndex(currentIndex=>currentIndex+1);
    }

// auto slide
useEffect(()=>{
    const interval=  setInterval(()=>{   
        updateSilder(1);
},5000);
return ()=>clearInterval(interval);
},[currentIndex]);
  
// slide to right 
 function toForward(){
   updateSilder(1);
 }
// slide to left 
 function toBackward(){
    updateSilder(-1);
 }
// chages in cart in db
useEffect(
  ()=>{
    
    axios.post(baseUrl+"/changestocart", {
      "userId":JSON.parse(localStorage.getItem("token")).id,
      ...productQnt
          })
          .then(res=>{
            console.log("ram ram",res.data,{...productQnt} )
            
          
          })
  },[productQnt]);

// changes to cart and in local storage and in db
  function changesToCart(item,qnt) {


    let cartItems=JSON.parse(localStorage.getItem("cart"));
    console.log("cart",cartItems,Array.isArray(cartItems))
    if(!cartItems){
      cartItems=[];
      // cartItems.push({ product:{...item}, quantity: 0 });
    }
    let updatedCart = cartItems;
    const existingItem = updatedCart.find((cartItem) =>{
    return cartItem?.product?._id == item._id
     }
     )
    if(existingItem && existingItem.quantity+qnt<=0){
      updatedCart=updatedCart.filter((cartItem) => cartItem.product._id !== item._id)
      console.log("below 0")
    }
    else if(existingItem && existingItem.quantity+qnt>=existingItem.product.stock){
      existingItem.quantity = item.stock;
      console.log("above stock");
    }
    else if (existingItem) {
      existingItem.quantity += qnt;
      console.log("add qnt");
    }
    else {
      updatedCart.push({ product:{...item}, quantity: qnt });
      console.log("create and add");
    }
    console.log("upcart",updatedCart);
   
    //changing in local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    dispatch(addItem( updatedCart
    ?updatedCart?.reduce(
      (accu,item)=>{
        return {...accu,quantity:accu.quantity+item.quantity}
        },
        {product:{},
        quantity:0
        }).quantity
    :0))

    //setting productQnt for updating db data  
    console.log("item.id",item._id)
setProductQnt({
  "productId":item._id,
  "productQnt":qnt
})
  }
  return (
    // <>fdsf</>
    <> {  productData&&
    <div className="SinglePageSlider ">
        
    
        <div className="SingleSliderImg">
        <img src={productData.images[currentIndex]} alt="not found" className="silderImages" id={productData.id} />
        {/* <img src={productData[currentIndex].images[0]} alt="not found" className="silderImages" id={productData[currentIndex].id} /> */}
        <ChevronLeftRoundedIcon className="backward" onClick={toBackward}/>
       <ChevronRightRoundedIcon className="forward" onClick={toForward} />
       <div className="miniSilder">
       {
        productData.images.slice(0,4).map((item,index)=>{
       return <img className="miniSilderImg" onClick={()=>{setIndex(index)}} key={index} src={item} alt="not found"  />

        })
       }
       </div>
        </div>
        <div className="SingleSlidermainImageText ">
        <b className="SingleSliderimageTitle">{productData.title}</b>
        <div className="SingleSliderimageText">{productData.description} </div>
        <StartRating className="SingleSliderimageRating" rating={productData.rating}/>
        <div className="SingleSliderimagestock">{"Stock left "+productData.stock} </div>
        <div className="ProductPrice">
    <span className='ProductPriceActural'>    <CurrencyRupeeIcon style={{fontSize:"1.3rem"}}/>{(productData.price*(100-productData.discountPercentage)).toFixed(2)} </span>
    <span className='ProductDiscountedPrice'> <CurrencyRupeeIcon style={{fontSize:"0.9rem"}}/> {productData.price*100 }</span>
    <span className='ProductDiscounted'> {productData.discountPercentage+"% off"}</span>

    </div>
      <ul className='offers'>
        <li className='offer'>91% positive ratings from 100K+ customers</li>
        <li className='offer'>100K+ recent orders from this brand</li>
        <li className='offer'>2+ years on SpeedX</li>
      </ul>
        <button className="sliderBtn hover" onClick={()=>{changesToCart(productData,1)}}>Add to Cart</button>
        </div>
      </div>}
           </>
    // <>
    
   
  )
}

export default SingleProduct;
