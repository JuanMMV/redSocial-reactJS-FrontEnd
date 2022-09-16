import Layout from "../components/global/Layout";
import TextBoxComponent from "../components/home/TextBoxComponent";
import PostsComponent from "../components/home/PostsComponent";
import { ModalComponent } from "../components/global/modal/ModalComponent";
import CarouselSwiper from "../components/global/carouselSwiper/CarouselSwiper";

const HomeScreen = () => {
  return (
    <Layout title="Home" description="Pagina Home">
      <TextBoxComponent />
      <PostsComponent />
   {/**
    * <ModalComponent
        children={<CarouselSwiper />}
      />
    */}    
    </Layout>
  );
};

export default HomeScreen;
