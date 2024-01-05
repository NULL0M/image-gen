// image-gen/client/src/pages/Home.jsx

import AIImageCreator from "../components/AIImageCreator";
import { AIImageGenerationContainer } from "../components/AIImageGenerationContainer";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <AIImageCreator />
      <AIImageGenerationContainer />
    </div>
  );
};

export default Home;
