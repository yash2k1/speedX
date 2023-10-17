import {NavLink, useNavigate } from "react-router-dom";
import "./HeaderStyle.css";
import {useSelector} from "react-redux"
// import Account from'../../pages/account/Account';
 import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function Top() {
  const cartCount=useSelector(state=>state.Cart.cartData)
  const [search, setSearch] = useState("");
  const [searchResult,setSearchResult]=useState("");
  const[openNav, setOpenNav] = useState("nav");
  const navigate = useNavigate();
  const toHome = () => {
    handleScroll();
    navigate("/");
  };
  const handleHamburger=()=>{
    openNav==="nav"? setOpenNav("openNav"):setOpenNav("nav");
  }
// scroll to top 
const handleScroll=()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
// searching accorting to regex
useEffect(
  ()=>{
    const baseUrl=`${import.meta.env.VITE_ULR}/search/${search}`
 axios.get(baseUrl)
 .then(res=>setSearchResult(res.data))

  },[search]

)

  const DropDownBtnState={
    "register":"none",
    "electronics":"none",
    "home-decore":"none",
    "acessories":"none",
      "clothes":"none",
  }
  const [selected,setSelected]=useState(DropDownBtnState);
  const navRegisterArrow=useRef();
  const navElectronicsArrow=useRef();
  const navAcessoriesArrow=useRef();
  const navHomeDecoreArrow=useRef();
  const navClothersArrow=useRef();

  // handleCart
  const handleCart=()=>{
    handleScroll();
    navigate("/Cart");

  }
// checking if we are login or not 
const [isLogin,setIsLogin]=useState( localStorage.getItem('token'));
// tostify msg
const tostNotify=()=>toast("you are login out");

  return (
    <div className="navBar">
    <div className={openNav}>
 
      <div className="top">
        <div className="top-left">
        <svg  onClick={toHome}  className="headerImage" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<linearGradient id="LZdpliniTCg5ajzezVcJUa_beqYdOTzwx1b_gr1" x1="25" x2="25" y1="11" y2="53" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#LZdpliniTCg5ajzezVcJUa_beqYdOTzwx1b_gr1)" d="M38,19v-8H20.5C13.596,11,8,16.596,8,23.5v0C8,30.404,13.596,36,20.5,36h9	c2.485,0,4.5,2.015,4.5,4.5v0c0,2.485-2.015,4.5-4.5,4.5H12v8h17.5C36.404,53,42,47.404,42,40.5v0C42,33.596,36.404,28,29.5,28h-9	c-2.485,0-4.5-2.015-4.5-4.5v0c0-2.485,2.015-4.5,4.5-4.5H38z"></path><linearGradient id="LZdpliniTCg5ajzezVcJUb_beqYdOTzwx1b_gr2" x1="32" x2="32" y1="10" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#LZdpliniTCg5ajzezVcJUb_beqYdOTzwx1b_gr2)" d="M29.5,54H11V44h18.5c1.93,0,3.5-1.57,3.5-3.5S31.43,37,29.5,37h-9C13.056,37,7,30.944,7,23.5	S13.056,10,20.5,10H39v10H20.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h9C36.944,27,43,33.056,43,40.5S36.944,54,29.5,54z M13,52	h16.5C35.841,52,41,46.841,41,40.5S35.841,29,29.5,29h-9c-3.032,0-5.5-2.468-5.5-5.5s2.468-5.5,5.5-5.5H37v-6H20.5	C14.159,12,9,17.159,9,23.5S14.159,35,20.5,35h9c3.032,0,5.5,2.468,5.5,5.5S32.532,46,29.5,46H13V52z M57,10h-3l-4.5,6.375L45,10h-3	l6,8.5L42,27h3l4.5-6.375L54,27h3l-6-8.5L57,10z"></path>
</svg>

          {(openNav==="nav") ? (
            <MenuIcon className="hamburger" onClick={handleHamburger}/>
          ) : (
            <CloseIcon className="hamburger" onClick={handleHamburger}/>
          )}
        </div>
        <div className="top-right">
          <div className="search-bar">
            <div className="searchInput">
            <input
              id="search"
              type="text"
              placeholder="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />

             {searchResult?.msg?.length?
             <>
             <CloseOutlinedIcon className="seachCancel" onClick={()=>{
              setSearchResult("");
              setSearch("");
              }} />
            <div className="searchResults">
              {searchResult?.msg?.map(item=>{
               return(
                 <div className="searchResult" 
                 onClick={()=>{
                   setSearchResult("");
                   setSearch("");
                  handleScroll();
                  navigate(`/${item.category}/${item.id}`);
                }}
                  >{item.title}</div>
               )
              })
            }
            </div>
            </>:""
            }
            </div>
            <label className="search" htmlFor="search">
              <SearchIcon className="icon"
                onClick={()=>{
                  let item=searchResult?.msg[0];
                  handleScroll();
                  setSearchResult("");
                  setSearch("");
                  navigate(`/${item.category}/${item.id}`);
                 
                }}
              style={{color:"white"}}/>
            </label>
           
          </div>
          <div className="navRegister">
            <PersonIcon /> 
            { isLogin?
 <div name="register" className="navRegistration" >       
              <div className="navRegisterBtn" style={{margin:"2px"}}
               onClick={()=>{
                     localStorage.removeItem("token");
                     localStorage.removeItem("cart");
                     tostNotify();
                     handleScroll();
                     setIsLogin( localStorage.getItem('token'));

                      }}>logout
                      </div>
                      </div>
            :  <div name="register" className="navRegistration" >
              
            <div className="navRegisterBtn" onClick={()=>{
                    handleScroll();
                    navigate("/login")}}>login
                    </div>
                  
              <div className="dropDownArrow"
                onClick={(e)=>{
                  selected.register==="flex"?
                  navRegisterArrow.current.style.transform="rotate(0deg)":
                  navRegisterArrow.current.style.transform="rotate(180deg)";
                  setSelected(selected=>selected.register==="flex"?DropDownBtnState
                  :{...DropDownBtnState,
                  "register":"flex"})
                }}
              ><ArrowDropDownIcon ref={navRegisterArrow}style={{height:"100%"}}/>
              </div>
                <div className="dropDown" style={{display:selected.register}} >
                <div className="navRegisterOption"
                onClick={()=> { 
                  setSelected(DropDownBtnState);
                  navigate(`/login`);
                }}
                >login</div>
              <div className="navRegisterOption"
              onClick={()=> {
                setSelected(DropDownBtnState);
                navigate(`/signUp`);
            }}
              >signUp</div>
             
                </div>
             
              </div>
              }
          </div>
          <div className="cart"style={{color:"black"}} onClick={handleCart}>
            {/* {" "} */}
            <ShoppingCartIcon />
             <span className="orderCount">
              {cartCount
              ||
              localStorage.getItem("cart")
              ?JSON.parse(localStorage.getItem("cart"))?.reduce(
                (accu,item)=>{
                  return {...accu,quantity:accu.quantity+item.quantity}
                  },
                  {product:{},
                  quantity:0
                  }).quantity
              :0
              }
              </span>{" "}
          </div>
        </div>
      </div>
{/* Navbar Iteams */}
      <div className="NavbarIteams">
        <NavLink to="/" onClick={handleHamburger} className="NavbarIteam">Home </NavLink>
        {/* electronics */}
        <div  onClick={handleHamburger} className="NavbarIteam">
              
              <div className="navRegisterBtn" onClick={()=>{
                      handleScroll();
                      navigate("/electronics")}}>electronics
                      </div>
                    
                <div className="dropDownArrow"
                  onClick={(e)=>{
                    selected.electronics==="flex"?
                    navElectronicsArrow.current.style.transform="rotate(0deg)":
                    navElectronicsArrow.current.style.transform="rotate(180deg)";
                    setSelected(selected=>selected.electronics==="flex"?DropDownBtnState:
                    {...DropDownBtnState,
                    "electronics":"flex"})
                  }}
                ><ArrowDropDownIcon ref={navElectronicsArrow}style={{height:"100%"}}/>
                </div>
                  <div className="dropDown" style={{display:selected.electronics}} >
                  <div className="navRegisterOption"
                  onClick={()=> { 
                    setSelected(DropDownBtnState);
                    navElectronicsArrow.current.style.transform="rotate(0deg)";
                    handleScroll();
                    navigate(`/electronics?subCategory=laptops`);
                  }}
                  >laptops</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navElectronicsArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/electronics?subCategory=smartphones`);
              }}
                >smartphones</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navElectronicsArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/electronics?subCategory=automotive`);
              }}
                >automotive</div>
               
                  </div>
               
                
        </div>
        {/* home-decore */}
        <div  onClick={handleHamburger} className="NavbarIteam">
              
              <div className="navRegisterBtn" onClick={()=>{
                      handleScroll();
                      navigate("/home-decore")}}>home-decore
                      </div>
                    
                <div className="dropDownArrow"
                  onClick={(e)=>{
                    selected["home-decore"]==="flex"?
                    navHomeDecoreArrow.current.style.transform="rotate(0deg)":
                    navHomeDecoreArrow.current.style.transform="rotate(180deg)";
                    setSelected(selected=>selected["home-decore"]==="flex"?DropDownBtnState:{...DropDownBtnState,"home-decore":"flex"})
                  }}
                ><ArrowDropDownIcon ref={navHomeDecoreArrow}style={{height:"100%"}}/>
                </div>
                  <div className="dropDown" style={{display:selected["home-decore"]}} >
                  <div className="navRegisterOption"
                  onClick={()=> { 
                    setSelected(DropDownBtnState);
                    navHomeDecoreArrow.current.style.transform="rotate(0deg)";
                    handleScroll();
                    navigate(`/home-decore?subCategory=lighting`);
                  }}
                  >lighting</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navHomeDecoreArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/home-decore?subCategory=furniture`);
              }}
                >furniture</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navHomeDecoreArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/home-decore?subCategory=home-decoration`);
              }}
                >home-decoration</div>
               
                  </div>
               
                
        </div>
        {/* acessories */}
        <div  onClick={handleHamburger} className="NavbarIteam">
              
              <div className="navRegisterBtn" onClick={()=>{
                      handleScroll();
                      navigate("/acessories")}}>acessories
                      </div>
                    
                <div className="dropDownArrow"
                  onClick={(e)=>{
                    selected.acessories==="flex"?
                    navAcessoriesArrow.current.style.transform="rotate(0deg)":
                    navAcessoriesArrow.current.style.transform="rotate(180deg)";
                    setSelected(selected=>selected.acessories==="flex"?DropDownBtnState:{...DropDownBtnState,"acessories":"flex"})
                  }}
                ><ArrowDropDownIcon ref={navAcessoriesArrow}style={{height:"100%"}}/>
                </div>
                  <div className="dropDown" style={{display:selected.acessories}} >
                  <div className="navRegisterOption"
                  onClick={()=> { 
                    setSelected(DropDownBtnState);
                    navAcessoriesArrow.current.style.transform="rotate(0deg)";
                    handleScroll();
                    navigate(`/acessories?subCategory=fragrances`);
                  }}
                  >fragrances</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navAcessoriesArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/acessories?subCategory=skincare`);
              }}
                >skincare</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navAcessoriesArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/acessories?subCategory=mens-watches`);
              }}
                >mens-watches</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navAcessoriesArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/acessories?subCategory=womens-watches`);
              }}
                >womens-watches</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navAcessoriesArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/acessories?subCategory=womens-bags`);
              }}
                >womens-bags</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navAcessoriesArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/acessories?subCategory=womens-jewellery`);
              }}
                >womens-jewellery</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navAcessoriesArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/acessories?subCategory=sunglasses`);
              }}
                >sunglasses</div>
               
                  </div>
               
                
        </div>
        {/* clothes */}
        <div  onClick={handleHamburger} className="NavbarIteam">
              
              <div className="navRegisterBtn" onClick={()=>{
                      handleScroll();
                      navigate("/clothes")}}>clothes
                      </div>
                    
                <div className="dropDownArrow"
                  onClick={(e)=>{
                    selected.clothes==="flex"?
                    navClothersArrow.current.style.transform="rotate(0deg)":
                    navClothersArrow.current.style.transform="rotate(180deg)";
                    setSelected(selected=>selected.clothes==="flex"?DropDownBtnState:{...DropDownBtnState,"clothes":"flex"})
                    
                  }}
                ><ArrowDropDownIcon ref={navClothersArrow}style={{height:"100%"}}/>
                </div>
                  <div className="dropDown" style={{display:selected.clothes}} >
                  <div className="navRegisterOption"
                  onClick={()=> { 
                    setSelected(DropDownBtnState);
                    navClothersArrow.current.style.transform="rotate(0deg)";
                    handleScroll();
                    navigate(`/clothes?subCategory=tops`);
                  }}
                  >tops</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navClothersArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/clothes?subCategory=womens-dresses`);
              }}
                >womens-dresses</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navClothersArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/clothes?subCategory=womens-shoes`);
              }}
                >womens-shoes</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navClothersArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/clothes?subCategory=mens-shirts`);
              }}
                >mens-shirts</div>
                <div className="navRegisterOption"
                onClick={()=> {
                  setSelected(DropDownBtnState);
                  navClothersArrow.current.style.transform="rotate(0deg)";
                  handleScroll();
                  navigate(`/clothes?subCategory=mens-shoes`);
              }}
                >mens-shoes</div> 
                  </div>
               
                
        </div>
      
      </div>
    </div>
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
theme="dark" />
    </div>
  );
}
export default Top;
