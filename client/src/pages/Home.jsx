// image-gen/client/src/pages/Home.jsx

import AIImageCreator from '../components/AIImageCreator';
import { AIImageGenerationContainer } from '../components/AIImageGenerationContainer';
import DiscoverTheAIContainer from '../components/DiscoverTheAIContainer';
import { Footer } from '../components/Footer';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <AIImageCreator />
      <AIImageGenerationContainer />

      <DiscoverTheAIContainer />
      {/* Rendering the Footer component for maintaining a consistent page layout */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
