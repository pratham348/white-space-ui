import React from "react"
import { ArrowRight } from "react-feather"
import { Button } from "reactstrap"
import apple from "../../assets/images/Apple.svg"
import microsoft from "../../assets/images/Microsoft.svg"
import google from "../../assets/images/Google.svg"
import slack from "../../assets/images/Slack.svg"
import data from "../../assets/images/data.svg"

const SeventhContainer = () => {
 return (
  <div className="seventh-container">
   <div className="container">
    <div className="data">
     <div className="text-box">
      <div className="main-text">100% your data</div>
      <div className="second-text">
       The app is open source and your notes are saved to an open format, so
       you'll always have access to them. Uses End-To-End Encryption (E2EE) to
       secure your notes and ensure no-one but yourself can access them.
      </div>
      <Button className="primary-btn">
       Read more
       <ArrowRight />
      </Button>
     </div>
     <div className="image-box">
      <img className="img-fluid" src={data} alt="data" />
     </div>
    </div>
    <div className="client">
     <div className="main-text">Our sponsors</div>
     <div className="client-list">
      <img className="img-fluid" src={apple} alt="apple" />
      <img className="img-fluid" src={microsoft} alt="microsoft" />
      <img className="img-fluid" src={slack} alt="slack" />
      <img className="img-fluid" src={google} alt="google" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default SeventhContainer
