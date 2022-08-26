import Layout from "../components/Layout";
import TextBoxComponent from "../components/TextBoxComponent";
import PostsComponent from "../components/PostsComponent";

const HomeScreen = () => {
  return (
    <Layout title="Home" description="Pagina Home">
      <PostsComponent />
      <TextBoxComponent />
    </Layout>
  );
};

export default HomeScreen;
