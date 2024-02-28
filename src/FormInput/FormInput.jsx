import "./formInput.css";
const FormInput = (props) => {
  const {onChange, ...inputProps} = props;
  return (
    <>
      <div className="formInput">
        <input {...inputProps} onChange={onChange}/>
      </div>
    </>
  );
};

export default FormInput;
