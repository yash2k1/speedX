import { useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
import './SinglePageSliderStyle.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
function SinglePageSlider() {
  const navigate=useNavigate();
  const [SliderData,setSliderData]=useState("");
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const data=useLocation();
  const category=data.pathname.split("/")[1];
  const PramsId=data.pathname.split("/")[2];
  useEffect(
    ()=>{
      const baseUrl= `${import.meta.env.VITE_ULR}`;
      axios.get(`${baseUrl}/${category}`)
      .then(res=>setSliderData(res.data.msg));
    },[]
  )
  console.log(SliderData&&SliderData);

    //  smooth scrolling
const handleScroll=()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}  
  return (
    <>
    {localStorage.getItem("token")&&
    <>
    <h1 className='realtedProducts'> Realted Products<hr /></h1>
    <Carousel id='home' activeIndex={index} onSelect={handleSelect}>
    {  SliderData&&SliderData.filter(item=>PramsId!=item.id).slice(0,4).map(item=>{
         return(
            <Carousel.Item  key={item.id}>
            <img className='sliderImages' src={item.thumbnail} text="First slide" />
            <Carousel.Caption>
              {/* {console.log(item.id)} */}
              <h3 className='hover' 
              onClick={()=>{
                handleScroll();
                navigate(`/${category}/${item.id}`);
                }}>{item.title}</h3>
              <p className='hover' 
              onClick={()=>{
                handleScroll();
                navigate(`/${category}/${item.id}`);
                }}>{item.description.slice(0,50)+"..."}</p>
            </Carousel.Caption>
          </Carousel.Item>
         
        )
    })  
     }
     
    </Carousel>
    </>}
    </>
  );
}

export default SinglePageSlider;

// import './SinglePageSliderStyle.css'
// import React, { useEffect, useMemo, useState } from 'react';
// import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
// import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
// import StartRating from '../../StartRating';

// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// const SinglePageSlider = () => {
//   const {category,id}=useParams()
// // console.log(category,id);
// const [productData,setProductData]=useState("");
// useEffect(
//  ()=>{
//  const baseUrl=`http://localhost:3030/${category}/${id}`;
//  axios.get(baseUrl)
//  .then(res=>setProductData(res.data.msg));
//  },[]
// )
//     const [slide,setSlide]=useState(0)
//     const updateSilder=(val)=>{
//           let n=(categoryWiseData.length)/3;
//           setSlide(slide=>(slide+val+n)%n);
//     }
 
// // auto slide
// useEffect(()=>{
//     const interval=  setInterval(()=>{   
//         updateSilder(1);
// },5000);
// return ()=>clearInterval(interval);
// },[slide]);
  
// // slide to right 
//  function toForward(){
//    updateSilder(1);
//  }
// // slide to left 
//  function toBackward(){
//     updateSilder(-1);
//  }
// //  console.log(categoryWiseData);
//   return (
//     <>   
//     <h1>Similar Product <hr /></h1>
// <div className="similarProductSlider">
//     {
//         categoryWiseData
//         .filter(item=>item.id!=categoryWiseData[slide].id)
//         .map((item,index)=>{
//             return(
//             <div className="similarProduct" key={index}>
//             <img className="similarProductImg" src={item.thumbnail} alt='not found'/>
//             <StartRating className="SingleSliderimageRating" rating={categoryWiseData[slide].rating}/>
//         <div className="ProductPrice">
//     <span className='ProductPriceActural'>    <CurrencyRupeeIcon style={{fontSize:"1.3rem"}}/>{categoryWiseData[slide].price*100} </span>
//     <span className='ProductDiscountedPrice'> <CurrencyRupeeIcon style={{fontSize:"0.9rem"}}/> {(categoryWiseData[slide].price*(100-categoryWiseData[slide].discountPercentage)*100).toFixed(2)}</span>
//     <span className='ProductDiscounted'> {"("+categoryWiseData[slide].discountPercentage+"% off)"}</span>

//     </div>
//             </div>)
//         }

//         ).slice(0,3)
//     }
//        <ChevronLeftRoundedIcon className="backward" onClick={toBackward}/>
//        <ChevronRightRoundedIcon className="forward" onClick={toForward} />
// </div>
//    </>
//   )
// }

// export default SinglePageSlider


