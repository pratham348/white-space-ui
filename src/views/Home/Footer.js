import React from "react"
import { ArrowRight } from "react-feather"
import { Button, Col, Row } from "reactstrap"
import logo2 from "../../assets/images/Logo 2.svg"
import socialIcon from "../../assets/images/Social Icon.svg"
import glob from "../../assets/images/glob.png"
const Footer = () => {
 return (
  <div className="footer">
   <div className="container">
    <div className="footer-list">
     <Row>
      <Col lg={3} sm={12} xs={12}>
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
      </Col>
      <Col lg={6} sm={12} xs={12}>
       <div className="service-list">
        <Row>
         <Col lg={4} sm={12} xs={12}>
          <ul>
           <li>Product</li>
           <li>Overview</li>
           <li>Pricing</li>
           <li>Customer stories</li>
          </ul>
         </Col>
         <Col lg={4} sm={12} xs={12}>
          <ul>
           <li>Resources</li>
           <li>Blog</li>
           <li>Guides & tutorials</li>
           <li>Help center</li>
          </ul>
         </Col>
         <Col lg={4} sm={12} xs={12} className="last-child">
          <ul>
           <li>Company</li>
           <li>About us</li>
           <li>Careers</li>
           <li>Media kit</li>
          </ul>
         </Col>
        </Row>
       </div>
      </Col>
      <Col lg={3} sm={12} xs={12}>
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
      </Col>
     </Row>
    </div>
    <div className="footer-bottom">
     <div className="left">
      <Row>
       <Col lg={8} sm={12} xs={12} className="bottom-list">
        <p>
         <img src={glob} alt="glob" className="img-fluid" />
         English
        </p>
        <p>Terms & privacy</p>
        <p>Security</p>
        <p>Status</p>
        <p>©2021 Whitepace LLC.</p>
       </Col>
       <Col lg={4} sm={12} xs={12} className="bottom-icon">
        <img src={socialIcon} alt="logo2" className="img-fluid w-25" />
       </Col>
      </Row>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Footer
