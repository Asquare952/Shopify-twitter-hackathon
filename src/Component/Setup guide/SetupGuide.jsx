import Range from "../../Assets/range.png"
import "./setup.css"
const SetupGuide = () => {
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
          
        </div>
      </section>
    </>
  );
}
 
export default SetupGuide;