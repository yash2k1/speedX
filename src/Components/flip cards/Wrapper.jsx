import React from "react"
import "./style.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const Wrapper = () => {
  const data = [
    {
      cover: <LocalShippingIcon class='fa-solid fa-truck-fast'/>,
      title: "PAN India Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <PaymentIcon class='fa-solid fa-id-card'/>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <WorkspacePremiumIcon class='fa-solid fa-shield'/>,
      title: "Quality Product",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <SupportAgentIcon class='fa-solid fa-headset'/>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
        <div className='wrapperContainer'>
          {data.map((val, index) => {
            return (
              <div className='wrapperProduct card' key={index}>
                <div className="frontFliper">
                <div className='wrapperImg  icon-circle'>
                {val.cover}
                <div className="wrapperImgText">
                <div className="wrapperImgTextValue">{val.title}</div>
                
                 </div> 
                </div>
                </div>
               
                <div className="backFliper">
                  <div className="backFliperText">
                  {val.decs}
                  </div>
                  </div>
              </div>
            )
          })}
        </div>
    </>
  )
}

export default Wrapper
