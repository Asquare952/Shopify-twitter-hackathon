import Styles from "./about.module.css"
import AboutImg from "../../Asset/about me img.png"
const AboutMe = () => {
  return (
    <>
      <section className={Styles.AboutMeContainer} id="aboutMe">
        <div className={Styles.title}>
          <h4>About <span>me</span></h4>
        </div>
        <div className={Styles.aboutMeContent}>
          <div className={Styles.aboutMeImg}>
            <img src={AboutImg} alt="dummy img of me" />
          </div>
          <div className={Styles.aboutMe}>
            <p>I'm a passionate, web developer who specializes frontend development (HTML, CSS, JAVASCRIPT and REACT.JS). I am very enthusiastic about bringing the technical and visual aspect of digital products to life. User experience, pixel perfect design, and writing clear,readable,highly performant code matters to me.</p>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default AboutMe;