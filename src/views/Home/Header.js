import React from "react"
import { Button } from "reactstrap"
import "./home.scss"
import logo from "../../assets/images/Logo.svg"
import { ArrowRight } from "react-feather"
const Header = () => {
 return (
  <div className="header">
   <div className="container d-flex justify-content-between align-items-center">
    <a href="/">
     <img src={logo} alt="logo" className="img-fluid" />
    </a>
    <div className="menu-section d-flex">
     <ul>
      <li>Products</li>
      <li>Solution</li>
      <li>Resources</li>
      <li>Pricing</li>
     </ul>
     <Button className="login secondary-btn">login</Button>
     <Button className="primary-btn">Try Whitepace free <ArrowRight/></Button>
    </div>
   </div>
  </div>
 )
}

export default Header
