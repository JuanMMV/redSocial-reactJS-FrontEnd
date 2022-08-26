import HeaderPageComponent from "./HeaderPageComponent";
import HeaderSeachComponent from "./HeaderSeachComponent";
import NavbarComponent from "./navbar/NavbarComponent";

const Layout = ({ children, title, description, login }) => {
  return (
    <div className="layoud-container">
      {login ? (
        <>
          <main>{children}</main>
      
        </>
      ) : (
        <>
            <NavbarComponent />
            <HeaderPageComponent />
            <HeaderSeachComponent />
          <main className="main-container">{children}</main>
        </>
      )}
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "ReactJs | mi sitio web",
  description: "Descripcion de mi sitio web",
};
