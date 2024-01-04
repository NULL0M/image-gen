// src/components/AIImageCreator.jsx
import Header from "./Header";
import { ButtonStartCreating } from "./ButtonStartCreating";
import "./AIImageCreator.scss";

import FrameIcon from "../assets/frame-427318910@2x.png";

const AIImageCreator = () => {
  return (
    <main className="main3">
      <Header />
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
            create custom Ai models
          </p>
          <ButtonStartCreating />
        </div>

        <img className="frame-icon" alt="" src={FrameIcon} />
      </div>
    </main>
  );
};

export default AIImageCreator;
