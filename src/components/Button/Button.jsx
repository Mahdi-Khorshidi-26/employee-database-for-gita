import Styles from "./button.module.css";
import PropTypes from "prop-types";
export default function Button({ type, text, href = "#", onClick }) {
  return (
    <div className={Styles.btnContainer} onClick={onClick}>
      {type === "submit" ? <button>{text}</button> : <a href={href} className={Styles.closeBtn}>{text}</a>}
    </div>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
