import React, { useState } from "react"
import { Button } from "reactstrap"
import "./home.scss"
import logo from "../../assets/images/Logo.svg"
import { ArrowRight, Menu, X } from "react-feather"
const Header = () => {
 const [isExpand, setIsExpand] = useState(false)
 return (
  <div className="header">
   <div className="container d-flex justify-content-between align-items-center">
    <a href="/" className={isExpand ? "d-none" : "d-block"}>
     <img src={logo} alt="logo" className="img-fluid" />
    </a>
    {!isExpand && (
     <Menu
      className="menu d-block d-lg-none"
      color="white"
      onClick={() => setIsExpand(!isExpand)}
     />
    )}
    <div className={isExpand ? "menu-section-expanded" : "menu-section"}>
     {isExpand && (
      <X
       className=" close d-block d-lg-none"
       color="white"
       onClick={() => setIsExpand(!isExpand)}
      />
     )}
     <ul>
      <li className="d-block d-lg-none">
       {" "}
       <a href="/">
        <img src={logo} alt="logo" className="img-fluid" />
       </a>
      </li>
      <li>Products</li>
      <li>Solution</li>
      <li>Resources</li>
      <li>Pricing</li>
      <li className="d-block d-lg-none">
       <Button className="secondary-btn">login</Button>
      </li>
      <li className="d-block d-lg-none">
       <Button className="primary-btn mt-2 mb-5">
        Try Whitepace free <ArrowRight />
       </Button>
      </li>
     </ul>
     <Button className="d-lg-block d-none login secondary-btn">login</Button>
     <Button className="d-lg-block d-none primary-btn mt-2">
      Try Whitepace free <ArrowRight />
     </Button>
    </div>
   </div>
  </div>
 )
}

export default Header
