import React from 'react'
import './AnnocumentStyle.css'
// import artVideo from "../../assets/art2.mp4"
const Annocument = () => {
  return (
    <div className='Annocument'>
      <video className='video' autoPlay muted loop>
  <source src="https://static.vecteezy.com/system/resources/previews/002/039/629/mp4/e-commerce-icons-background-free-video.mp4" type="video/mp4"/>
</video>
<div className="videoText">Deliver happyness</div>

    </div>
  )
}

export default Annocument
