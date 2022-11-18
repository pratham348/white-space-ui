import { Card, CardBody } from "reactstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import Avatar1 from "../../assets/images/Avater-1.png"
import Avatar2 from "../../assets/images/Avater-2.png"
import Avatar from "../../assets/images/Avater.png"

const NinthContainer = () => {
 return (
  <div className="ninth-container">
   <div className="container">
    <div className="clients">
     <div className="text-box">
      <div className="main-text">What Our Clients Says</div>
     </div>
     <div className="card-box">
      <Swiper
       slidesPerView={3}
       spaceBetween={30}
       pagination={{
        clickable: true
       }}
       modules={[Pagination]}
       className="mySwiper"
      >
       <SwiperSlide>
        <Card>
         <CardBody>
          <p>
           Whitepate is designed as a collaboration tool for businesses that is
           a full project management solution.
          </p>
          <div className="client-detail">
           <img src={Avatar} alt="client" className="img-fluid" />
           <div className="text-date">
            <h3>Oberon Shaw, MCH</h3>
            <p>Head of Talent Acquisition, North America</p>
           </div>
          </div>
         </CardBody>
        </Card>
       </SwiperSlide>
       <SwiperSlide>
        <Card>
         <CardBody>
          <p>
           Whitepate is designed as a collaboration tool for businesses that is
           a full project management solution.
          </p>
          <div className="client-detail">
           <img src={Avatar1} alt="client" className="img-fluid" />
           <div className="text-date">
            <h3>Oberon Shaw, MCH</h3>
            <p>Head of Talent Acquisition, North America</p>
           </div>
          </div>
         </CardBody>
        </Card>
       </SwiperSlide>
       <SwiperSlide>
        <Card>
         <CardBody>
          <p>
           Whitepate is designed as a collaboration tool for businesses that is
           a full project management solution.
          </p>
          <div className="client-detail">
           <img src={Avatar2} alt="client" className="img-fluid" />
           <div className="text-date">
            <h3>Oberon Shaw, MCH</h3>
            <p>Head of Talent Acquisition, North America</p>
           </div>
          </div>
         </CardBody>
        </Card>
       </SwiperSlide>
       <SwiperSlide>
        <Card>
         <CardBody>
          <p>
           Whitepate is designed as a collaboration tool for businesses that is
           a full project management solution.
          </p>
          <div className="client-detail">
           <img src={Avatar} alt="client" className="img-fluid" />
           <div className="text-date">
            <h3>Oberon Shaw, MCH</h3>
            <p>Head of Talent Acquisition, North America</p>
           </div>
          </div>
         </CardBody>
        </Card>
       </SwiperSlide>
       <SwiperSlide>
        <Card>
         <CardBody>
          <p>
           Whitepate is designed as a collaboration tool for businesses that is
           a full project management solution.
          </p>
          <div className="client-detail">
           <img src={Avatar1} alt="client" className="img-fluid" />
           <div className="text-date">
            <h3>Oberon Shaw, MCH</h3>
            <p>Head of Talent Acquisition, North America</p>
           </div>
          </div>
         </CardBody>
        </Card>
       </SwiperSlide>
      </Swiper>
     </div>
    </div>
   </div>
  </div>
 )
}

export default NinthContainer
