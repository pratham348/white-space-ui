import React from "react"
import { ArrowRight } from "react-feather"
import { Button } from "reactstrap"

const SixthContainer = () => {
 return (
  <div className="sixth-container">
   <div className="container">
    <div className="main-text">Your work, everywhere you are</div>
    <div className="second-text">
     Access your notes from your computer, phone or tablet by synchronising with
     various services, including whitepace, Dropbox and OneDrive. The app is
     available on Windows, macOS, Linux, Android and iOS. A terminal app is also
     available!
    </div>
    <Button className="primary-btn">
     Try Taskey
     <ArrowRight />
    </Button>
   </div>
  </div>
 )
}

export default SixthContainer
