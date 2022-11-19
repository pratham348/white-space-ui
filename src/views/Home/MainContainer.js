import ImageBox from "../../assets/images/Image-container.png"
import { Button, Col, Row } from "reactstrap"
import { ArrowRight } from "react-feather"

const MainContainer = () => {
 return (
  <div className="main-container">
   <div className="container d-flex align-items-center">
   <Row>
   <Col lg={6} sm={12} xs={12}>
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
    </Col>
    <Col lg={6} sm={12} xs={12}>
    <div className="image-box">
     <img src={ImageBox} alt="Imagebox" className="img-fluid" />
    </div>
    </Col>
    </Row>
   </div>
  </div>
 )
}

export default MainContainer
