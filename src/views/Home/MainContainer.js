import ImageBox from "../../assets/images/Image-container.png"
import { Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ArrowRight } from "react-feather"

const MainContainer = () => {
 return (
  <div className="main-container">
   <div className="container d-flex align-items-center">
    <div className="text-box">
     <div className="main-text">Get More Done with whitepace</div>
     <div className="second-text">
      Project management software that enables your teams to collaborate, plan,
      analyze and manage everyday tasks
     </div>
     <Button className="primary-btn">
      Try Whitepace free
      {/* <i class="fa-thin fa-arrow-right"></i> */}
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

export default MainContainer
