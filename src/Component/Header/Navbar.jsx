import "./navbar.css";
import { useState } from "react";
import Logo from "../../Asset/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <>
      <header>
        <div className="subContainer">
          <div className="navlayout">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="navbar">
              <nav
                className={sideNav ? "navLinks expand" : "navLinks"}
                onClick={() => {
                  setSideNav(!sideNav);
                }}
              >
                <ul>
                  <li>
                    <a href="#hero">Home</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#aboutMe">About</a>
                  </li>
                  <li>
                    <a href="#project">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="" className="downloadBtn">
                      Download cv
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <button
              className="navToggler"
              onClick={() => {
                setSideNav(!sideNav);
              }}
            >
              {sideNav ? (
                <IoMdClose className="menuBar" />
              ) : (
                <FiMenu className="closeIcon" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
