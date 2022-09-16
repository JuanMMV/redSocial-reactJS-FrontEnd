import { navLinks } from "../../../utils/navLinks";
import { FaTwitter, FaPencilAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import "../../../styles/componentsStyles/global/Navbar.css";

export default function NavbarComponent() {
  return (
    <div className="container-navbar">
      <nav className="sidebar">
        <ul className="navbar">
          <li className="navbar-brand">
            <a href="/">
              <FaTwitter className="logo-app" />
            </a>
          </li>
          {navLinks.map((link, index) => {
            return (
              <li key={index} className="nav-item">
                <a href={link.path} className="item-icon">
                  {link.icon}
                </a>
                <a href={link.path} className="item-link">
                  {link.name}
                </a>
              </li>
            );
          })}
          <a href="#" className="tweet-btn">
            <FaPencilAlt className="pencil-icon" />
            <div className="text">Tweet</div>
          </a>
        </ul>
        <a href="#" className="profile-btn">
          <div className="profile-info">
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="profile-img"
              width={35}
              height={35}
            />
            <div>
              <p className="name">Aki</p>
              <p className="username">@akichan</p>
            </div>
          </div>
          <div className="option-icon">
            <FiMoreHorizontal className="icon" />
          </div>
        </a>
      </nav>
    </div>
  );
}
