//src/components/FormField.jsx

import "./FormField.scss";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className="form">
    <div className="form-tittle">
      <label htmlFor={name}>{labelName}</label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="button-Surprise">
          Surprise me
        </button>
      )}
    </div>
    <div className="form-field">
      <input
        type={type}
        id={name}
        name={name}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  </div>
);

export default FormField;
