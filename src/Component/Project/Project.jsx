import Styles from "./project.module.css";
import ProjectOneImg from "../../Asset/project 1 img (2).png";
import ProjectTwoImg from "../../Asset/project 2 img.png";
import ProjectThreeImg from "../../Asset/project 3 img.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const Project = () => {
  return (
    <>
      <section className={Styles.projectContainer} id="project">
        <div className={Styles.projectContent}>
          <div className={Styles.title}>
            <h4>
              My <span>Projects</span>
            </h4>
          </div>
          <div className={Styles.projects}>
            {/* project 1 */}
            <div className={Styles.project}>
              <div className={Styles.img}>
                <img src={ProjectOneImg} alt="" />
              </div>
              <div className={Styles.details}>
                <h3>01</h3>
                <h4>Crypto Screener Application</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  tenetur commodi deserunt perspiciatis aspernatur qui quis
                  maiores vel optio enim quam officiis accusamus ipsam aliquid
                  molestias, sint alias praesentium quidem?
                </p>
                <a href="">
                  <LiaExternalLinkAltSolid />
                </a>
              </div>
            </div>
            {/* project 1 ends here */}

            {/* project 2 */}
            <div className={Styles.project} id={Styles.projectTwo}>
              <div className={Styles.details}>
                <h3>02</h3>
                <h4>Euphoria - Ecommerce (Apparels) Website Template</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora iste repellendus odit laboriosam eligendi inventore
                  laborum modi voluptatum odio, distinctio impedit accusantium,
                  veniam vitae voluptas aliquam dicta illo repudiandae
                  quibusdam?
                </p>
                <a href="">
                  <LiaExternalLinkAltSolid />
                </a>
              </div>
              <div className={Styles.img}>
                <img src={ProjectTwoImg} alt="" />
              </div>
            </div>
            {/* project 2 ends here */}

            {/* project 3 */}
            <div className={Styles.project}>
              <div className={Styles.img}>
                <img src={ProjectThreeImg} alt="" />
              </div>
              <div className={Styles.details}>
                <h3>03</h3>
                <h4>Blog Website Template</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro culpa vero quam, eos maxime, sequi corporis magnam et
                  officia dignissimos magni nihil ad ducimus totam non nisi
                  quibusdam, quidem voluptatibus.
                </p>
                <a href="">
                  <LiaExternalLinkAltSolid />
                </a>
              </div>
            </div>
            {/* project 3 ends here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
