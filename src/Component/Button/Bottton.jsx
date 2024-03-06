import Styles from "./button.module.css";
const Button = ({ text }) => {
  return (
    <>
      <button className={Styles.setUpBtn}>{text}</button>
    </>
  );
};

export default Button;
