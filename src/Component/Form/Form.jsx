import { useState } from "react";
import FormInput from "../../FormInput/FormInput";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    textarea: "",
  });
  // inputs array
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.values });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <textarea
          name="textarea"
          type="text"
          cols="30"
          rows="10"
          placeholder="Message"
        />
        <div className="getInTouch">
          <button className="getInTouchBtn">
            <a href="">Get in touch</a>
          </button>

          <div className="socialLinks">
            <div className="socialLinksItem">
              <a href="https://twitter.com/lekan_coder">
                <FaXTwitter />
              </a>
            </div>
            <div className="socialLinksItem">
              <a href="https://www.linkedin.com/in/abdulafeez-abdulazeez-4a9465289/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="socialLinksItem">
              <a href="https://github.com/Asquare952">
                <FaGithub />
              </a>
            </div>
            <div className="socialLinksItem">
              <a href="https://wa.me/2349137139186?text=Hello%20%20how%20can%20i%20help%20you">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
