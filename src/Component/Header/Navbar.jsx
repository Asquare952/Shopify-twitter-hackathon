import "./navbar.css";
import { useState } from "react";
import Logo from "../../Asset/logo.png";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import StoreIcon from "../../Asset/storeicon.png";
import { IoCheckmark } from "react-icons/io5";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
 const handleClick = () =>{
  setMenu(!menu)
 }
  return (
    <>
      <header>
        <div className="navlayout">
          <div className="logo">
            <img src={Logo} alt="" className="logoImg" />
            <i className="textLogo">Shopify</i>
          </div>
          {/*  */}
          <div className="searchinput">
            <CiSearch className="searchIcon" />
            <input type="search" placeholder="Search" />
          </div>
          {/*  */}
          <div className="bellDavii">
            <button className="bell">
              <FaBell />
            </button>
            <div className="davii">
              <p>Davii collections</p>
              {menu ? (
                <button onClick={handleClick}>DC</button>
              ) : (
                <button onClick={handleClick}>DC</button>
              )}
            </div>
          </div>
        </div>
        {menu ? (
          <div className="menu">
            <div className="header">
              <div className="daviiCheck">
                <div className="daviiHeader">
                  <button>DC</button>
                  <p>Davii collections</p>
                </div>
                <IoCheckmark className="checkIcon" />
              </div>
              <div className="stores">
                <img src={StoreIcon} alt="" />
                <p>All stores</p>
              </div>
            </div>
            <hr className="hr" />
            <div className="help">
              <ul>
                <li>Help Center</li>
                <li>Changelog</li>
                <li>Community forums</li>
                <li>Hire a Shopify Partner</li>
                <li>Keyboard shortcuts</li>
              </ul>
            </div>
            <hr />
            <div className="account">
              <ul>
                <li>
                  David Micheal <br /> <small>davidmicheal@gmail.com</small>
                </li>
                <li>
                  <a href="">Manage account</a>
                </li>
                <li>
                  <a href="">Log out</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Navbar;
