import { useState } from "react";
import "./plan.css";
import { IoMdClose } from "react-icons/io";
const Plan = () => {
  const [close, setClose] = useState(true);
  const handleClose = () => {
    setClose(!close);
  };
  return (
    <>
      {close && (
        <section className="planContainer">
          <div className="content">
            <div className="text">
              <p>
                Extend your trail for $1/month for 3 months on select plans.
              </p>
            </div>
            <div className="selectPlan">
              <button className="planBtn">
                <a href="https://www.shopify.com/pricing">Select a plan</a>
              </button>
              <IoMdClose onClick={handleClose} className="closeIcon" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Plan;
