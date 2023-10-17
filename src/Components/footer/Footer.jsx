import React from "react"
import "./FooterStyle.css"

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from "react-router-dom"
const Footer = () => {
  const handleClick=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    
      <div className="footer">
      {/* constainer 1*/}
      <div className="footerContainer">
      <h1 onClick={handleClick} className="fotterLogo">
      <svg  className="fotterLogoImg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<linearGradient id="LZdpliniTCg5ajzezVcJUa_beqYdOTzwx1b_gr1" x1="25" x2="25" y1="11" y2="53" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#LZdpliniTCg5ajzezVcJUa_beqYdOTzwx1b_gr1)" d="M38,19v-8H20.5C13.596,11,8,16.596,8,23.5v0C8,30.404,13.596,36,20.5,36h9	c2.485,0,4.5,2.015,4.5,4.5v0c0,2.485-2.015,4.5-4.5,4.5H12v8h17.5C36.404,53,42,47.404,42,40.5v0C42,33.596,36.404,28,29.5,28h-9	c-2.485,0-4.5-2.015-4.5-4.5v0c0-2.485,2.015-4.5,4.5-4.5H38z"></path><linearGradient id="LZdpliniTCg5ajzezVcJUb_beqYdOTzwx1b_gr2" x1="32" x2="32" y1="10" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#LZdpliniTCg5ajzezVcJUb_beqYdOTzwx1b_gr2)" d="M29.5,54H11V44h18.5c1.93,0,3.5-1.57,3.5-3.5S31.43,37,29.5,37h-9C13.056,37,7,30.944,7,23.5	S13.056,10,20.5,10H39v10H20.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h9C36.944,27,43,33.056,43,40.5S36.944,54,29.5,54z M13,52	h16.5C35.841,52,41,46.841,41,40.5S35.841,29,29.5,29h-9c-3.032,0-5.5-2.468-5.5-5.5s2.468-5.5,5.5-5.5H37v-6H20.5	C14.159,12,9,17.159,9,23.5S14.159,35,20.5,35h9c3.032,0,5.5,2.468,5.5,5.5S32.532,46,29.5,46H13V52z M57,10h-3l-4.5,6.375L45,10h-3	l6,8.5L42,27h3l4.5-6.375L54,27h3l-6-8.5L57,10z"></path>
</svg>SpeedX</h1>
        {/* <img className="fotterLogoImg" src="/logo.png" alt="not found" />speedarto</h1> */}
      <div className="fotterBlogExplaine">“Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.”</div>
      <div className="fotterSocialMedia">
        <Instagram/> <Facebook/> <LinkedIn/> <Twitter/>
      </div>
  
      </div>
          {/* constainer 2*/}
          <div className="footerContainer">
      <h1 className="fotterSiren">Services</h1>
      <Link to='/'         onClick={handleClick} className='FooterNonActiveNav'>home</Link>
    <Link to='/electronics'  onClick={handleClick} className='FooterNonActiveNav'>electronics</Link>
    <Link to='/home-decore'  onClick={handleClick} className='FooterNonActiveNav'>home-decore</Link>
    <Link to='/acessories' onClick={handleClick} className='FooterNonActiveNav'>acessories</Link>
    <Link to='/clothes'    onClick={handleClick} className='FooterNonActiveNav'>clothes</Link>
      </div>
      {/* constainer 3 */}
      <div className="footerContainer">
      <h1 className="Resources">Resources</h1>
      <div className="help">Help</div>
      <div className="help">About</div>
      <div className="help">Contact Us</div>
      </div>
      {/* constainer 4*/}
      <div className="footerContainer">
      <h1 className='readMore'>More</h1>
       <a href="tel:23233244" target="_blank">+9123456789</a>
       <a href="mailto:@yashgupta1mole@gmail.com" target="_blank">mail us</a>
      <div className="copyRight"> <CopyrightIcon/>Made by Yash Gupta</div>
      </div>
      </div>
  
  )
}

export default Footer
