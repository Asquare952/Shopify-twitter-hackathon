import "./navbar.css";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import MobileLogo from "../../Assets/logomobile.png";
import DesktopLogo from "../../Assets/logodesktop.png";
import StoreIcon from "../../Assets/storeIcon.png";
import { useState } from "react";
const NavBar = () => {
  const [notificationPop, setNotificationPop] = useState(false);
  const [collectionsPop, setcollectionsPop] = useState(false);
  const handleNotificationPop = () => {
    setNotificationPop(!notificationPop);
  };
  const handlecollectionsPop = () => {
    setcollectionsPop(!collectionsPop);
  };
  return (
    <>
      <header>
        <section className="navBar">
          <div className="logo">
            <a href="https://www.shopify.com">
              <img src={MobileLogo} alt="" />
            </a>
            <a href="https://www.shopify.com">
              <img src={DesktopLogo} alt="" className="logoDesktop" />
            </a>
          </div>

          <div className="input">
            <CiSearch className="searchIcon" />
            <input type="search" placeholder="Search" />
          </div>

          <div className="notificationAndStore">
            <div className="notification">
              {notificationPop ? (
                <button
                  className="notificationBtn"
                  onClick={handleNotificationPop}
                >
                  <FaRegBell className="bell" />
                </button>
              ) : (
                <button
                  className="notificationBtn"
                  onClick={handleNotificationPop}
                >
                  <FaRegBell className="bell" />
                </button>
              )}

              {notificationPop ? (
                <div className="notificationPop">
                  <div className="alert">
                    <h3>Alerts</h3>
                    <div className="filterAndCircleTick">
                      <IoFilterOutline className="filter" />
                      <CiCircleCheck className="circleCheck" />
                    </div>
                  </div>
                  <p className="alertMessage">
                    Alert about your store and account will show here
                  </p>
                </div>
              ) : null}
            </div>
            <div className="store">
              {collectionsPop ? (
                <button onClick={handlecollectionsPop}>
                  <h3>Davii Collection</h3>
                  <span>DC</span>
                </button>
              ) : (
                <button onClick={handlecollectionsPop}>
                  <h3>Davii Collection</h3>
                  <span>DC</span>
                </button>
              )}

              {collectionsPop ? (
                <div className="storePop">
                  <div className="header">
                    <button className="storeBtn">
                      <span>DC</span>
                      <h3>Davii Collection</h3>
                    </button>

                    <div className="allStores">
                      <img src={StoreIcon} alt="" />
                      <h3>All stores</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="collection">
                    <ul>
                      <li>
                        <a href="https://www.shopify.com">Help Center</a>
                      </li>
                      <li>
                        <a href="https://www.shopify.com">Changelog</a>
                      </li>
                      <li>
                        <a href="https://www.shopify.com">Community forums</a>
                      </li>
                      <li>
                        <a href="https://www.shopify.com">
                          Hire a Shopify Partner
                        </a>
                      </li>
                      <li>
                        <a href="https://www.shopify.com">Keyboard shortcut</a>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="account">
                    <ul>
                      <li>
                        David Micheal <span>davidmicheal@gmail.com</span>
                      </li>
                      <li>
                        <a href="https://www.shopify.com">Manage account</a>
                      </li>
                      <li>
                        <a href="http://admin.shopify.com/logout">Log out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
