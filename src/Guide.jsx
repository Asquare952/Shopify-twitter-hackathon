import "./Guide.css";
import { useState } from "react";
import TitleIcon from "./Assets/Frame 1000003540.png";
import CustomizeImg from "./Assets/Customize your online store.img.png";
import AddProductImg from "./Assets/Add your first product.img.png";
import AddCustomImg from "./Assets/Add a custom domain.img.png";
import NameStore from "./Assets/Name your store.img.png";
import SetPaymentImg from "./Assets/Set up a payment provider.img.png";
const Guide = () => {
  const [guideInfoOne, setguideInfoOne] = useState(false);
  const [guideInfoTwo, setguideInfoTwo] = useState(false);
  const [guideInfoThree, setguideInfoThree] = useState(false);
  const [guideInfoFour, setguideInfoFour] = useState(false);
  const [guideInfoFive, setguideInfoFive] = useState(false);
  return (
    <>
      <article cle className="setUp">
        <div className="rightContainer">
          <div className="title">
            <div>
              <img src={TitleIcon} alt="" />
            </div>
            {guideInfoOne ? (
              <h4 onClick={() => setguideInfoOne(!guideInfoOne)}>
                Customize your online store
              </h4>
            ) : (
              <h4 onClick={() => setguideInfoOne(!guideInfoOne)}>
                Customize your online store
              </h4>
            )}
          </div>
          <div className="detail">
            {guideInfoOne && (
              <p>
                Choose a theme and add your logo, colors, and images to reflect
                your brand. <a>Learn more</a>
              </p>
            )}
          </div>
        </div>
        <div>{guideInfoOne && <img src={CustomizeImg} alt="" />}</div>
      </article>
      {/* step 2 */}
      <article cle className="setUp">
        <div className="rightContainer">
          <div className="title">
            <div>
              <img src={TitleIcon} alt="" />
            </div>
            {guideInfoTwo ? (
              <h4 onClick={() => setguideInfoTwo(!guideInfoTwo)}>
                Add your first product
              </h4>
            ) : (
              <h4 onClick={() => setguideInfoTwo(!guideInfoTwo)}>
                Add your first product
              </h4>
            )}
          </div>
          <div className="detail">
            {guideInfoTwo && (
              <p>
                Write a description, add photos, and set pricing for the
                products you plan to sell. <a>Learn more</a>
              </p>
            )}
          </div>
        </div>
        <div>{guideInfoTwo && <img src={AddProductImg} alt="" />}</div>
      </article>
      {/* step 3 */}
      <article cle className="setUp">
        <div className="rightContainer">
          <div className="title">
            <div>
              <img src={TitleIcon} alt="" />
            </div>
            {guideInfoThree ? (
              <h4 onClick={() => setguideInfoThree(!guideInfoThree)}>
                Add a custom domain
              </h4>
            ) : (
              <h4 onClick={() => setguideInfoThree(!guideInfoThree)}>
                Add a custom domain
              </h4>
            )}
          </div>
          <div className="detail">
            {guideInfoThree && (
              <p>
                Your current domain is 222219.myshopify.com but you can add a
                custom domain to help customers find your online store.{" "}
                <a>Learn more</a>
              </p>
            )}
          </div>
        </div>
        <div>{guideInfoThree && <img src={AddCustomImg} alt="" />}</div>
      </article>
      {/* step 4 */}
      <article cle className="setUp">
        <div className="rightContainer">
          <div className="title">
            <div>
              <img src={TitleIcon} alt="" />
            </div>
            {guideInfoFour ? (
              <h4 onClick={() => setguideInfoFour(!guideInfoFour)}>
                Name your store
              </h4>
            ) : (
              <h4 onClick={() => setguideInfoFour(!guideInfoFour)}>
                Name your store
              </h4>
            )}
          </div>
          <div className="detail">
            {guideInfoFour && (
              <p>
                Your temporary store name is currently Davii collections. The
                store name appears in your admin and your online store.{" "}
                <a>Learn more</a>
              </p>
            )}
          </div>
        </div>
        <div>{guideInfoFour && <img src={NameStore} alt="" />}</div>
      </article>
      {/* step 5 */}
      <article cle className="setUp">
        <div className="rightContainer">
          <div className="title">
            <div>
              <img src={TitleIcon} alt="" />
            </div>
            {guideInfoFive ? (
              <h4 onClick={() => setguideInfoFive(!guideInfoFive)}>
                Set up a payment provider
              </h4>
            ) : (
              <h4 onClick={() => setguideInfoFive(!guideInfoFive)}>
                Set up a payment provider
              </h4>
            )}
          </div>
          <div className="detail">
            {guideInfoFive && (
              <p>
                Choose a payment provider to start accepting payments. You’ll
                need to create an account with the payment provider and set it
                up with your Shopify store. <a>Learn more</a>
              </p>
            )}
          </div>
        </div>
        <div>{guideInfoFive && <img src={SetPaymentImg} alt="" />}</div>
      </article>
    </>
  );
};
export default Guide;
