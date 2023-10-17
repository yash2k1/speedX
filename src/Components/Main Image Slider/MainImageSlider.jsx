import "./MainImageSliderStyle.css";
import { useState ,useEffect} from "react";
// import Categories from "./Categories"
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useNavigate } from "react-router-dom";
function MainImageSlider({subCategoryWiseData}){
   const navigate=useNavigate();
    let [currentIndex, setIndex]=useState(0);
    const updateSilder=(val)=>{
      let n=subCategoryWiseData.length;
      return !subCategoryWiseData? 
      setIndex(currentIndex=>currentIndex+1):
      setIndex(currentIndex=>(currentIndex+val+n)%n);
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
//  smooth scrolling
const handleScroll=()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

return(
    <>   
   
    <div className="sliders">
        
    <div className="mainImageText ">
        <b>Get what you want from the vast varrity</b>
        <div className="imageText">{subCategoryWiseData[currentIndex].description} </div>
        <button className="sliderBtn hover" onClick={()=>{
          handleScroll()
          navigate(`/${subCategoryWiseData[currentIndex].category}`)
        }}>visit category</button>
        </div>
        <span className="image">
        <img src={subCategoryWiseData[currentIndex].thumbnail} alt="not found" className="silderImages" id={subCategoryWiseData[currentIndex].id} />
        <ChevronLeftRoundedIcon className="backwardMainPage" onClick={toBackward}/>
    <ChevronRightRoundedIcon className="forwardMainPage" onClick={toForward} />
        </span>
      </div>
    
           </>
       )}
export default MainImageSlider;