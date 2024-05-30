import Styles from "./input.module.css";
import PropTypes from "prop-types";
export default function Input({
  value,
  setValue,
  label,
  id,
  type,
  required = true,
  disable = false,
}) {
  return (
    <div className={Styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        disabled={disable}
      />
    </div>
  );
}
Input.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  disable: PropTypes.bool,
};
