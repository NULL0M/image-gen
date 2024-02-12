//image-gen/client/src/pages/CreatePost.jsx
import { TextToImageGenerator } from '../components/TextToImageGenerator';
import { WhatIsAiImageGeneratorContainer } from '../components/WhatIsAiImageGeneratorContainer';

import './CreatePost.scss';

// Functional component definition for the CreatePost page.
const CreatePost = () => {
  // Rendering the CreatePost page with components for text-to-image generation and explanatory content.
  return (
    <div className='theproject' id='top'>
      {/* Component for converting text to images */}
      <TextToImageGenerator />

      {/* Container component explaining the AI image generation process */}
      <WhatIsAiImageGeneratorContainer />
    </div>
  );
};

export default CreatePost;
