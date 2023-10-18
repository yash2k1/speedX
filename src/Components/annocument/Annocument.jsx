import React from 'react'
import './AnnocumentStyle.css'
// import artVideo from "../../assets/art2.mp4"
const Annocument = () => {
  return (
    <div className='Annocument'>
      <video className='video' autoPlay muted loop>
  <source src="https://player.vimeo.com/external/490256797.sd.mp4?s=43b5c79d8fcb484f78f6212f75b3b5061936addb&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
</video>
<div className="videoText">Khushio ki Delivery</div>

    </div>
  )
}

export default Annocument
