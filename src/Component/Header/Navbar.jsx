import "./navbar.css";
import { useState } from "react";
import Logo from "../../Asset/logo.png"; 
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const [, setSideNav] = useState(false);

  return (
    <>
      <header>
        <div className="navlayout">
          <div className="logo">
            <img src={Logo} alt="" className="logoImg"/>
            <i className="textLogo">shopify</i>
          </div>
          {/*  */}
          <div className="searchinput">
            <CiSearch className="searchIcon"/>
            <input type="search" placeholder="Search" />
          </div>
          {/*  */}
          <div className="bellDavii">
            <button className="bell">
              <FaBell />
            </button>
            <div className="davii">
              <p>Davii collections</p>
              <button>DC</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
