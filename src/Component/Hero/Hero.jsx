import Styles from "./hero.module.css"
import HeroImg from "../../Asset/hero img.png"
const Home = () => {
  return (
    <>
      <section className={Styles.heroContainer} id="hero">
        <div className={Styles.heroContent}>
          <div className={Styles.banner}>
            <h4>
              Hello I'am <span>Abdul Afeez.</span> <span>Frontend</span>{" "}
              Developer Based in <span>Nigeria</span>
            </h4>
          </div>
          <div className={Styles.heroImg}>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Home;