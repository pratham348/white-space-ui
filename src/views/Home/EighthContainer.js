import React from "react"
import { ArrowRight } from "react-feather"
import { Button } from "reactstrap"
import Apps from "../../assets/images/Apps.svg"
const EighthContainer = () => {
 return (
  <div className="eighth-container">
   <div className="container">
    <div className="data">
     <div className="image-box">
      <img className="img-fluid" src={Apps} alt="Apps" />
     </div>
     <div className="text-box">
      <div className="main-text">
       Work with Your Favorite Apps Using whitepace
      </div>
      <div className="second-text">
       Whitepace teams up with your favorite software. Integrate with over 1000+
       apps with Zapier to have all the tools you need for your project success.
      </div>
      <Button className="primary-btn">
       Read more
       <ArrowRight />
      </Button>
     </div>
    </div>
   </div>
  </div>
 )
}

export default EighthContainer
