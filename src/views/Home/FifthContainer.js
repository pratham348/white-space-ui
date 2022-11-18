import React from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
const FifthContainer = () => {
 return (
  <div className="fifth-container">
   <div className="plan">
    <div className="container align-items-center">
     <Row>
      <div className="big-text">Choose Your Plan</div>
      <div className="small-text">
       Whether you want to get organized, keep your personal life on track, or
       boost workplace productivity, Evernote has the right plan for you.
      </div>
     </Row>
     <Row className="align-items-center">
      <Col>
       <Card className="free">
        <CardBody>
         <h4>Free</h4>
         <h3>$0</h3>
         <p>Capture ideas and find them quickly</p>
         <ul>
          <li>Sync unlimited devices</li>
          <li>10 GB monthly uploads</li>
          <li>200 MB max. note size</li>
          <li>Customize Home dashboard and access extra widgets</li>
          <li>Connect primary Google Calendar account</li>
          <li>Add due dates, reminders, and notifications to your tasks</li>
         </ul>
         <Button className="secondary-btn">Get Started</Button>
        </CardBody>
       </Card>
      </Col>
      <Col>
       <Card className="personal">
        <CardBody>
         <h4>Personal</h4>
         <h3>$0</h3>
         <p>Capture ideas and find them quickly</p>
         <ul>
          <li>Sync unlimited devices</li>
          <li>10 GB monthly uploads</li>
          <li>200 MB max. note size</li>
          <li>Customize Home dashboard and access extra widgets</li>
          <li>Connect primary Google Calendar account</li>
          <li>Add due dates, reminders, and notifications to your tasks</li>
         </ul>
         <Button className="primary-btn">Get Started</Button>
        </CardBody>
       </Card>
      </Col>
      <Col>
       <Card className="free">
        <CardBody>
         <h4>Organization</h4>
         <h3>$0</h3>
         <p>Capture ideas and find them quickly</p>
         <ul>
          <li>Sync unlimited devices</li>
          <li>10 GB monthly uploads</li>
          <li>200 MB max. note size</li>
          <li>Customize Home dashboard and access extra widgets</li>
          <li>Connect primary Google Calendar account</li>
          <li>Add due dates, reminders, and notifications to your tasks</li>
         </ul>
         <Button className="secondary-btn">Get Started</Button>
        </CardBody>
       </Card>
      </Col>
     </Row>
    </div>
   </div>
  </div>
 )
}

export default FifthContainer
