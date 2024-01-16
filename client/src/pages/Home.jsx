// image-gen/client/src/pages/Home.jsx

import AIImageCreator from '../components/AIImageCreator';
import { AIImageGenerationContainer } from '../components/AIImageGenerationContainer';
import DiscoverTheAIContainer from '../components/DiscoverTheAIContainer';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <AIImageCreator />
      <AIImageGenerationContainer />
      <DiscoverTheAIContainer />
    </div>
  );
};

export default Home;
