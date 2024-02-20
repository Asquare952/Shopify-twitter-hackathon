import Styles from "./contact.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <section className={Styles.contactContainer} id="contact">
        <div className={Styles.subContainer}>
          <div className={Styles.layout}>
            <div className={Styles.form}>
              <form>
                <div>
                  <input type="text" placeholder="Your name" />
                </div>
                <div>
                  <input type="text" placeholder="Email" />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="40"
                    rows="10"
                    placeholder="Write message"
                  />
                </div>

                <div className={Styles.getInTouch}>
                  <button className={Styles.getInTouchBtn}>
                    <a href="">Get in touch</a>
                  </button>

                  <div className={Styles.socialLinks}>
                    <div className={Styles.socialLinksItem}>
                      <a href="https://twitter.com/lekan_coder">
                        <FaXTwitter />
                      </a>
                    </div>
                    <div className={Styles.socialLinksItem}>
                      <a href="https://www.linkedin.com/in/abdulafeez-abdulazeez-4a9465289/">
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <div className={Styles.socialLinksItem}>
                      <a href="https://github.com/Asquare952">
                        <FaGithub />
                      </a>
                    </div>
                    <div className={Styles.socialLinksItem}>
                      <a href="https://wa.me/2349137139186?text=Hello%20%20how%20can%20i%20help%20you">
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={Styles.colm}>
              <div className={Styles.text}>
                <div className={Styles.frameOne}>
                  <h4>Let's talk for something special</h4>
                  <p>I seek to push the limits of creativity to create high-engaging user friendly, and memorable interactive experiences.</p>
                </div>
                <div className={Styles.frameTwo}>
                  <h4>olamilekanazeez905@gmail.com</h4>
                  <h4></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
