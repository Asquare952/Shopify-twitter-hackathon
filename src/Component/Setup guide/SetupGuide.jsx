import Range from "../../Assets/range.png";
import "./setup.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Guides from "../../Guide";
import { useState } from "react";
const SetupGuide = () => {
  const [showsetUpGuide, setshowsetUpGuide] = useState(false);
  const handleSetUpGuide = () => {
    setshowsetUpGuide(!showsetUpGuide);
  };
  return (
    <>
      <section className="setupGuideContainer">
        <div className="headerFrame">
          <div>
            <div className="headerFrameOne">
              <h3 className="title">Setup guide</h3>
              <p>Use this personalized guide to get your store up running</p>
            </div>
            <div className="headerFrameTwo">
              <p>1 / 5 completed</p>
              <img src={Range} alt="" />
            </div>
          </div>
          <div>
            {showsetUpGuide ? (
              <button className="arrowBtn">
                <IoIosArrowUp
                  className="arrowIcon"
                  onClick={handleSetUpGuide}
                />
              </button>
            ) : (
              <button className="arrowBtn">
                <IoIosArrowDown
                  className="arrowIcon"
                  onClick={handleSetUpGuide}
                />
              </button>
            )}
          </div>
        </div>
        <div className="setUpInfo">{showsetUpGuide ? <Guides /> : null}</div>
      </section>
    </>
  );
};

export default SetupGuide;
