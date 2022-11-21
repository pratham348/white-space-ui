import { Card, CardBody, Row } from "reactstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import Avatar1 from "../../assets/images/Avater-1.png"
import Avatar2 from "../../assets/images/Avater-2.png"
import Avatar from "../../assets/images/Avater.png"

const NinthContainer = () => {
 return (
  <div className="ninth-container">
   <div className="container">
    <div></div>
    <div className="clients">
     <div className="text-box">
      <div className="main-text">What Our Clients Says</div>
     </div>
     <div className="card-box">
      <Row>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
         delay: 2500,
         disableOnInteraction: false
        }}
        pagination={{
         clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
         1024: {
          slidesPerView: 3,
          spaceBetween: 20
         },
         991: {
          slidesPerView: 2,
          spaceBetween: 20
         },
         100: {
          slidesPerView: 1,
          spaceBetween: 20
         }
        }}
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
      </Row>
     </div>
    </div>
   </div>
  </div>
 )
}

export default NinthContainer
