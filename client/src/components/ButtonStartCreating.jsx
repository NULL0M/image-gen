//src/components/ButtonStartCreating.jsx
import { Link } from "react-router-dom";
import "./ButtonStartCreating.scss";

// React component for the ButtonStartCreating.
export const ButtonStartCreating = () => {
  // Rendering the ButtonStartCreating component with a link to the createpost route.
  return (
    // Container for the button, utilizing the "buttonstartcreating" CSS class for styling.
    <div className="buttonstartcreating">
      {/* Link to the createpost route with additional styling */}
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
