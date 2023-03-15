import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../../styles/componentsStyles/global/carouselSwiper.css";
import { useSelector } from "react-redux";

const CarouselSwiper = ({ dispatch, modalActualState, navigate }) => {
  const postData = useSelector((state) => state.posts);
  console.log(postData);
  const handleClose = () => {
    dispatch(
      modalActualState({
        isVisible: false,
      })
    );
    navigate("/");
  };

  return (
    <div className="carousel-container">
      <div className="carousel-show">
        <div className="close-carousel">
          <span onClick={() => handleClose()}>x</span>
        </div>
        <Swiper modules={[Navigation]} navigation>
          {postData.images.map((post, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={post.image} alt="imagen" />
              </SwiperSlide>
            );
          })}
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
