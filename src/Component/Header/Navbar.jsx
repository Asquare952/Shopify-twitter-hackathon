import Styles from "./navbar.module.css";
import Logo from "../../Asset/logo.png"
const Navbar = () => {
  return (
    <>
      <header>
        <div className={Styles.logo}>
          <a href="/">
            <img src={Logo} alt="az logo" />
          </a>
        </div>
        <nav>
          <ul className={Styles.navLinks}>
            <li className={Styles.links}>
              <a href="">Home</a>
            </li>
            <li className={Styles.links}>
              <a href="">About Me</a>
            </li>
            <li className={Styles.links}>
              <a href="">Skills</a>
            </li>
            <li className={Styles.links}>
              <a href="">Projects</a>
            </li>
            <li className={Styles.links}>
              <a href="">Contact Me</a>
            </li>
          </ul>
        </nav>

        <div className={Styles.downloadCv}>
          <button className={Styles.downloadBtn}>
            <a href="">Download CV</a>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
