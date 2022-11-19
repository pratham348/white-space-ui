import React from "react"
import { ArrowRight } from "react-feather"
import { Button, Col, Row } from "reactstrap"
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
                    <Row>
                        <Col lg={6} sm={12}>
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
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="image-box">
                                <img className="img-fluid" src={data} alt="data" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="client">
                    <div className="main-text">Our sponsors</div>
                    <div className="client-list justify-content-around">
                        <Row className=" justify-content-center">
                            <Col lg={3} sm={12}>
                                <img className="img-fluid img-icon" src={apple} alt="apple" />
                            </Col>
                            <Col lg={3} sm={12}>
                                <img className="img-fluid img-icon" src={microsoft} alt="microsoft" />
                            </Col>
                            <Col lg={3} sm={12}>
                                <img className="img-fluid img-icon" src={slack} alt="slack" />
                            </Col>
                            <Col lg={3} sm={12}>
                                <img className="img-fluid img-icon" src={google} alt="google" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeventhContainer
