import Layout from "../components/Layout";
import TextBoxComponent from "../components/TextBoxComponent";
import PostsComponent from "../components/PostsComponent";

const HomeScreen = () => {
  return (
    <Layout title="Home" description="Pagina Home">
      <TextBoxComponent />
      <PostsComponent />
      {/*

                

       */}
    </Layout>
  );
};

export default HomeScreen;
