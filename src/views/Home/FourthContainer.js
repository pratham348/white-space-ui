import React from "react"
import { ArrowRight } from "react-feather"
import { Button, Col, Row } from "reactstrap"
import ImageBox from "../../assets/images/Image-container.png"
const FourthContainer = () => {
    return (
        <div className="forth-container">
            <div className="customize">
                <div className="container d-flex align-items-center">
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="image-box">
                                <img src={ImageBox} alt="Imagebox" className="img-fluid" />
                            </div>
                        </Col>

                        <Col lg={6} sm={12} xs={12}>
                            <div className="text-box">
                                <div className="main-text">Customise it to your needs</div>
                                <div className="second-text">
                                    Customise the app with plugins, custom themes and multiple text editors
                                    (Rich Text or Markdown). Or create your own scripts and plugins using the
                                    Extension API.
                                </div>
                                <Button className="primary-btn custom">
                                    Let’s Go
                                    <ArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default FourthContainer
