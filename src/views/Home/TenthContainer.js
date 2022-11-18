import { ArrowRight } from "react-feather"
import { Button } from "reactstrap"
import apple from "../../assets/images/apple-black-logo 2.svg"
import microsoft from "../../assets/images/windows-logo 1.svg"
import android from "../../assets/images/android-logo 1.svg"
const TenthContainer = () => {
 return (
  <div className="tenth-container">
   <div className="container">
    <div className="main-data">
     <h1>Try Whitepace </h1>
     <h1>today</h1>
     <h3>
      Get started for free.
      <br /> Add your whole team as your needs grow.
     </h3>
     <Button className="primary-btn">
      Try Taskey free
      <ArrowRight />
     </Button>
     <h3>On a big team? Contact sales</h3>
     <div className="image-list">
      <img src={apple} alt="apple" className="img-fluid" />
      <img src={microsoft} alt="microsoft" className="img-fluid" />
      <img src={android} alt="android" className="img-fluid" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default TenthContainer
