//src/components/ButtonStartCreating.jsx
import { Link } from "react-router-dom";
import "./ButtonStartCreating.scss";

export const ButtonStartCreating = () => {
  return (
    <div className="buttonstartcreating">
      <Link className="ellipse-group" to="/createpost">
        <div className="frame-inner" />
        <div className="start-creating-for">{`Start creating for free  -> `}</div>
      </Link>
      <h6 className="create-your-digital">
        Create your digital image here - No credit card required
      </h6>
    </div>
  );
};
