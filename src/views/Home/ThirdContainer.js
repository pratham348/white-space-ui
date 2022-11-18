import React from "react"
import { ArrowRight } from "react-feather"
import { Button } from "reactstrap"
import ImageBox from "../../assets/images/Image-container.png"

const ThirdContainer = () => {
 return (
  <div className="third-container">
   <div className="container d-flex align-items-center">
    <div className="text-box">
     <div className="main-text">Use as Extension</div>
     <div className="second-text">
      Use the web clipper extension, available on Chrome and Firefox, to save
      web pages or take screenshots as notes.
     </div>
     <Button className="primary-btn">
      Let’s Go
      <ArrowRight />
     </Button>
    </div>
    <div className="image-box">
     <img src={ImageBox} alt="Imagebox" className="img-fluid" />
    </div>
   </div>
  </div>
 )
}

export default ThirdContainer
