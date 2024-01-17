// image-gen/client/src/pages/Home.jsx

import AIImageCreator from "../components/AIImageCreator";
import { AIImageGenerationContainer } from "../components/AIImageGenerationContainer";
import { Footer } from "../components/Footer";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <AIImageCreator />
      <AIImageGenerationContainer />
      {/* Rendering the Footer component for maintaining a consistent page layout */}
      <Footer />
    </div>
  );
};

export default Home;
