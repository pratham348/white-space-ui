import React from "react"
import { ArrowRight, Globe } from "react-feather"
import { Button } from "reactstrap"
import logo2 from "../../assets/images/Logo 2.svg"
import socialIcon from "../../assets/images/Social Icon.svg"
import glob from "../../assets/images/glob.png"
const Footer = () => {
 return (
  <div className="footer">
   <div className="container">
    <div className="footer-list">
     <div className="company-details">
      <img src={logo2} alt="logo2" className="img-fluid" />
      <p>
       whitepace was created for <br />
       the new ways we live and
       <br /> work. We make a better
       <br />
       workspace around the world
      </p>
     </div>
     <div className="service-list">
      <div>
       <ul>
        <li>Product</li>
        <li>Overview</li>
        <li>Pricing</li>
        <li>Customer stories</li>
       </ul>
      </div>
      <div>
       <ul>
        <li>Resources</li>
        <li>Blog</li>
        <li>Guides & tutorials</li>
        <li>Help center</li>
       </ul>
      </div>
      <div className="last-child">
       <ul>
        <li>Company</li>
        <li>About us</li>
        <li>Careers</li>
        <li>Media kit</li>
       </ul>
      </div>
     </div>
     <div className="try-now">
      <h1>Try It Today</h1>
      <p>
       Get started for free. Add your
       <br /> whole team as your needs grow.
      </p>
      <Button className="primary-btn">
       Start today
       <ArrowRight />
      </Button>
     </div>
    </div>
    <div className="footer-bottom">
     <div className="left">
      <ul>
       <li>
        <img src={glob} alt="glob" className="img-fluid" />
        English
       </li>
       <li>Terms & privacy</li>
       <li>Security</li>
       <li>Status</li>
       <li>©2021 Whitepace LLC.</li>
       <li>
        {" "}
        <img src={socialIcon} alt="logo2" className="img-fluid" />
       </li>
      </ul>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Footer
