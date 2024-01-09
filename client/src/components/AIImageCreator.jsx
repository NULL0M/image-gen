// src/components/AIImageCreator.jsx

import Header from "./Header";
import { ButtonStartCreating } from "./ButtonStartCreating";

import "./AIImageCreator.scss";
import FrameIcon from "../assets/frame-427318910@2x.png";

// Functional component definition for the AIImageCreator.
const AIImageCreator = () => {
  // Rendering the AIImageCreator component with Header, content, and ButtonStartCreating components.
  return (
    // Main container for AIImageCreator, utilizing the "main3" CSS class for styling.
    <main className="main3">
      {/* Header component for the page header */}
      <Header />

      {/* Container for the main content and image */}
      <div className="maincontainer-parent">
        <div className="maincontainer">
          <h2 className="create-amazing-photos-container">
            <span>{`Create amazing `}</span>
            <span className="photos">photos</span>
            <span>{` with the power of `}</span>
            <span className="photos">AI</span>
          </h2>

          <p className="image-maker-is">
            Image maker is a set of magical AI tools. Generate original images
            to scale, modify photos, expand images beyond the original, or
            create custom AI models.
          </p>

          {/* Button with a link to the createpost route. */}
          <ButtonStartCreating />
        </div>

        {/* Image container with the FrameIcon */}
        <img className="frame-icon" alt="" src={FrameIcon} />
      </div>
    </main>
  );
};

export default AIImageCreator;
