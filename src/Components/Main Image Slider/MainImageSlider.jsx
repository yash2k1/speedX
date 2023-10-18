import "./MainImageSliderStyle.css";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
import headerBg from "../../assets/header-bg.svg"
// import Categories from "./Categories"
// import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
// import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useNavigate } from "react-router-dom";
function MainImageSlider({subCategoryWiseData}){
   const navigate=useNavigate();
   console.log(subCategoryWiseData)
 
//  sliding
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};
//  smooth scrolling
const handleScroll=()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
return (
  <div className="slider-header">
     <img className='header-image' src={headerBg} alt="not found" />
  <Carousel id='home' activeIndex={index} onSelect={handleSelect}>
  {  subCategoryWiseData&&subCategoryWiseData.map(item=>{
       return(
          <Carousel.Item  key={item.id}>
          <img className='sliderImages' src={item.thumbnail} text="First slide" />
        
            <button className="mainImgSliderBtn" onClick={()=>{
              handleScroll();
              navigate(`/${item.category}`)
            }}>View Category</button>
            
         
        </Carousel.Item>
       
      )
  })  
   }
   
  </Carousel>
  </div>
)};

export default MainImageSlider;