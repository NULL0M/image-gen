//image-gen/client/src/pages/CreatePost.jsx
import { TextToImageGenerator } from '../components/TextToImageGenerator';

import './CreatePost.scss';

// Functional component definition for the CreatePost page.
const CreatePost = () => {
  // Rendering the CreatePost page with components for text-to-image generation and explanatory content.
  return (
    <div className='theproject'>
      {/* Component for converting text to images */}
      <TextToImageGenerator />
    </div>
  );
};

export default CreatePost;
