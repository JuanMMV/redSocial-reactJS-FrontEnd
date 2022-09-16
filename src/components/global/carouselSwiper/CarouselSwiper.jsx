import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../../styles/componentsStyles/global/carouselSwiper.css";

const CarouselSwiper = () => {
  return (
    <div className="carousel-container">
 
      <div className="carousel-show">
        <div className="close-carousel">
          <span>x</span>
        </div>
        <Swiper modules={[Navigation]} navigation>
          <SwiperSlide>
            <img src="/images/P7.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          
            <img src="/images/P8.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div className="button">
          <h1>Likes</h1>
        </div>
      </div>
      <div className="carousel-description">
        <h1>comentario</h1>
      </div>
    </div>
  );
};

export default CarouselSwiper;
