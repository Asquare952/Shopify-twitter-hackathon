import Styles from "./footer.module.css";
import Logo from "../../Asset/white logo.png";
import { LiaCopyright } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <section className={Styles.footerContainer}>
        <div className={Styles.subContainer}>
          <div className={Styles.copyWrite}>
            <p>
              Copyright <LiaCopyright /> 2024 | All Right Reserved
            </p>
            <p className={Styles.name}>Abdul Afeez</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
