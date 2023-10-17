import React, { useEffect, useMemo, useState } from 'react'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import './GenricPageHeaderStyle.css'
const GenricPageHeader = ({categoryWiseData}) => {
    const [headerImgIndex,setHeaderImgIndex]=useState(0);
   const updateSilder=(val)=>{
       if(!categoryWiseData){
       return  setHeaderImgIndex(0);
       }
        let n=categoryWiseData?.length;
       
    setHeaderImgIndex(headerImgIndex=>(headerImgIndex+val+n)%n);
}

useEffect(
    ()=>{
      let interval=  setTimeout(()=>{
            updateSilder(1);
        },2000)
return ()=>clearInterval(interval);
    },[headerImgIndex])

// slide to right 
function toForward(){
    updateSilder(1);
  }
 // slide to left 
  function toBackward(){
     updateSilder(-1);
  }
  return (
    <div className='Genric-slider'>
{   categoryWiseData&& 
<>
{/* {console.log(headerImgIndex)} */}
 <img className='Genric-slider-img' src={categoryWiseData[headerImgIndex]?.images[0]} alt="not found" />
 <div className='Genric-slider-text'>{categoryWiseData[headerImgIndex]?.category} </div>
 </>
}  

<ChevronLeftRoundedIcon className="backward" onClick={toBackward}/>
    <ChevronRightRoundedIcon className="forward" onClick={toForward} />
  </div>
  )
}

export default GenricPageHeader
