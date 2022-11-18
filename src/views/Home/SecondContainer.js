import React from "react"
import { Button } from "reactstrap"
import ImageBox from "../../assets/images/Image-container.png"
import Work from "../../assets/images/Work Together Image.svg"
import { ArrowRight } from "react-feather"

const SecondContainer = () => {
 return (
  <div className="container second-container">
   <div className="project-management">
    <div className="container d-flex align-items-center">
     <div className="text-box">
      <div className="main-text">Project Management</div>
      <div className="second-text">
       Images, videos, PDFs and audio files are supported. Create math
       expressions and diagrams directly from the app. Take photos with the
       mobile app and save them to a note.
      </div>
      <Button className="primary-btn">
       Get Started
       <ArrowRight />
      </Button>
     </div>
     <div className="image-box">
      <img src={ImageBox} alt="Imagebox" className="img-fluid" />
     </div>
    </div>
   </div>

   <div className="work-together">
    <div className="container d-flex align-items-center">
     <div className="image-box">
      <img src={Work} alt="Imagebox" className="img-fluid" />
     </div>
     <div className="text-box">
      <div className="main-text">Work together</div>
      <div className="second-text">
       With whitepace, share your notes with your colleagues and collaborate on
       them. You can also publish a note to the internet and share the URL with
       others.
      </div>
      <Button className="primary-btn">
       Try it now
       <ArrowRight />
      </Button>
     </div>
    </div>
   </div>
  </div>
 )
}

export default SecondContainer
