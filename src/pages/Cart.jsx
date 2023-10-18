import React, { useEffect, useState } from 'react';
import Top from '../Components/header/Top';
import Footer from '../Components/footer/Footer';
import "./CartStyle.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {addItem} from "../feature/AddToCart";
import { useDispatch } from 'react-redux';
import FallBack from '../Components/Login&signUp/FallBack';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [cartItem,setCartItem]=useState("");
  const [productQnt,setProductQnt]=useState({
    "productId":"",
    "productQnt":0
  });
  // const baseUlr=
  const Token=JSON.parse(localStorage.getItem("token"))?.token;
  const baseUrl= `${import.meta.env.VITE_ULR}`;
  useEffect(
    ()=>{
      axios.get(baseUrl+`/getCart/${JSON.parse(localStorage.getItem("token"))?.id}`,{
        headers:{
            "authorization":"bearer "+Token
                 }
    })
      .then(res=>{
        if(res?.data?.err==="token expired"){
      localStorage.removeItem('cart')
      localStorage.removeItem('token')
        }
        setCartItem(res.data.user);
        }
        )
      
    },[]
  )
  const tostNotify=()=>toast("Thanks for shoping...");
  useEffect(
    ()=>{
      
      axios.post(baseUrl+"/changestocart", {
        "userId":JSON.parse(localStorage.getItem("token"))?.id,
        ...productQnt 
            })
            .then(res=>{
              console.log("ram ram",res.data,{...productQnt} )
              if(res.data.user){
                setCartItem(res.data.user);
              }
            })
          if(productQnt.productId==="clear"){
            tostNotify();
            setTimeout(()=>{
              navigate("/");
              dispatch(addItem(0));
              localStorage.removeItem("cart");
            },2000);
          }  
    },[productQnt]);

  console.log(cartItem&&cartItem[0]?.product?.id)
 
 
  // changes to cart and in local storage and in db
  function changesToCart(item,qnt) {
    let updatedCart =JSON.parse(localStorage.getItem("cart"));
    if(!updatedCart){
      updatedCart=[];
    }
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
    console.log("set Item",updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    dispatch(addItem( updatedCart?updatedCart?.reduce(
      (accu,item)=>{
        return {...accu,quantity:accu.quantity+item.quantity}
        },
        {product:{},
        quantity:0
        }).quantity
    :0))

    //setting productQnt for updating db data  
    console.log("item.id",item)
setProductQnt({
  "productId":item._id,
  "productQnt":qnt
})

  }
  // subtotal
  // const [subTotal,setSubTotal]=useState(0);
  const [coupon,setCoupon]=useState("");
  const [checkCoupon,setCheckCoupon]=useState(false);
  let total=0;
  // checkout function 
 
  const checkout=()=>{
    setProductQnt({
      "productId":"clear",
      "productQnt":0
    })
  }
  return (
    <>
  {  localStorage.getItem("token")?
<>

<Top/>

{(cartItem&&cartItem[0]?.product?.id)?<div className='cartSection'>

      <div className="cartHeader">
        <div className="leftCartHeader">Product</div>
        <div className="rightCartHeader">
            <div className="cartPrice">Price</div>
            <div className="cartQnt">Qnt</div>
            <div className="cartUnitPrice">unit Price</div>
        </div>
      </div>
      <div className="cartProducts">
       
       {
        cartItem.map(item=>{
          total+=(item.product.price*(100-item.product.discountPercentage) *item.quantity);
     return(
      <div className="cartProduct" key={item.product.id}>
      <div className="cartImg">
      <img className="cartProductImg" alt='not found' src={item.product.thumbnail}/>
      <div className="CartProductTitle">{item.product.title}</div>
      </div>
      <div className="cartProductDetails">
      <div className="cartProductPrice">{(item.product.price*(100-item.product.discountPercentage) *item.quantity).toFixed(2)}<CurrencyRupeeIcon style={{fontSize:"0.9rem"}}/></div>
      <div className="cartProductProductQnt">
        <div className="addQnt" onClick={()=>changesToCart(item.product,1)}>+</div>
        {item.quantity}
        <div className="removeQnt" onClick={()=>changesToCart(item.product,-1)}>-</div>
        </div>
      <div className="cartProductUnitPrice">{(item.product.price*(100-item.product.discountPercentage)).toFixed(2)}<CurrencyRupeeIcon style={{fontSize:"0.9rem"}}/></div>
      </div>
    </div>
     )

       })
       
        }
   
      </div>
      <div className="cartFooter">
        <div className="leftCartFooter">
            <input type="text" placeholder='Enter Code 123' value={coupon} onChange={(e)=>setCoupon(e.target.value)} className='redeemInput'/>
            <div className="redeem" onClick={()=>{
              coupon==="123"?setCheckCoupon(true):setCheckCoupon(false);
              coupon==="123"&&setCoupon("");
              
               }}>redeem</div>
        </div>
        <div className="rightCartFooter">
          <div className="subTotalRow"><div className="subTotal">Sub total</div><div className="subTotalAmount">{total.toFixed(2)}     <CurrencyRupeeIcon style={{fontSize:"0.9rem"}}/></div></div>
          <div className="shipingRow"><div className="shipingFee">shiping Fee</div><div className="shipingAmount">{cartItem.length*100}<CurrencyRupeeIcon  style={{fontSize:"0.9rem"}}/></div></div>
          <div className="couponRow"><div className="couponApplied">coupon</div><div className="couponAppliedAmount">{checkCoupon?"10%":0}</div></div>
          <div className="totalRow"><div className="total">Total</div>
          <div className="totalAmount">
            {checkCoupon?((cartItem.length*100)+(total*0.9)).toFixed(2):(-cartItem.length*100+(total*1)).toFixed(2) }<CurrencyRupeeIcon style={{fontSize:"0.9rem"}}/>
          </div>
          </div>
          <button className="checkout" onClick={checkout}>checkout</button>
        </div>
      </div>
   </div>:
    <video className='cartVideo' autoPlay muted loop >
          <source src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/girl-doing-online-shopping-8643912-6879318.mp4?h=700" type="video/mp4" />
        </video> 
   }
    <Footer/>
    </>
    :
    <FallBack/>
  }
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
theme='dark'/>
    </>
  )
}

export default Cart
