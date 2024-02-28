import Styles from "./contact.module.css";
import Form from "../Form/Form";

const Contact = () => {
  
  return (
    <>
      <section className={Styles.contactContainer} id="contact">
        <div className={Styles.subContainer}>
          <div className={Styles.layout}>
            <div className={Styles.form}>
              <Form/>
            </div>
            <div className={Styles.colm}>
              <div className={Styles.text}>
                <div className={Styles.frameOne}>
                  <h4>Let's talk for something special</h4>
                  <p>
                    I seek to push the limits of creativity to create
                    high-engaging user friendly, and memorable interactive
                    experiences.
                  </p>
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
