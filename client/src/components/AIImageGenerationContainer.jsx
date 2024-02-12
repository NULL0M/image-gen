// src/components/AIImageGenerationContainer.jsx
import { ButtonStartCreating } from './ButtonStartCreating';
import ImageGeneration from '../assets/image-10@2x.png';
import './AIImageGenerationContainer.scss';

// React component for the AIImageGenerationContainer.
export const AIImageGenerationContainer = () => {
  // Rendering the AIImageGenerationContainer with content and a call-to-action button.
  return (
    <section className='thefutureisai'>
      <h2 className='a-fully-integrated'>{`A fully integrated suite of image-generation tools  `}</h2>
      <div className='thefutureisai1'>
        <div className='thefutureisaiimage'>
          <img className='image-10-icon' alt='' src={ImageGeneration} />
        </div>
        <div className='thefutureisaidescriptioncontai'>
          <h2 className='the-future-is'>The future is AI</h2>
          <div className='thefutureisaidescription'>
            <div className='aidescriptioncontainer'>
              <h2 className='infinite-horizons'>Infinite Horizons</h2>
              <p className='ai-powered-image-generation-container'>
                <span className='artificial-intelligence'>AI</span>
                <span>{`-powered image generation opens a realm of endless creativity, where pixels become a canvas for `}</span>
                <span className='artificial-intelligence'>
                  artificial intelligence
                </span>
                <span> to craft stunning visual masterpieces.</span>
              </p>
            </div>
            <div className='aidescriptioncontainer'>
              <h2 className='infinite-horizons'>ArtTech Renaissance</h2>
              <p className='ai-powered-image-generation-container'>
                <span>{`The synergy of art and technology takes center stage as `}</span>
                <span className='artificial-intelligence'>AI image</span>
                <span>
                  {' '}
                  generators redefine the boundaries of innovation, transforming
                  concepts into captivating visual realities.
                </span>
              </p>
            </div>
            <div className='aidescriptioncontainer'>
              <h2 className='infinite-horizons'>Narrative Alchemy:</h2>
              <p className='ai-powered-image-generation-container'>
                <span>{`Explore a new era of visual storytelling as `}</span>
                <span className='artificial-intelligence'>AI</span>
                <span>{` generators breathe life into images, weaving narratives through the `}</span>
                <span className='artificial-intelligence'>digital</span>
                <span>{` brushstrokes of `}</span>
                <span className='artificial-intelligence'>
                  artificial intelligence
                </span>
                <span>.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonStartCreating />
    </section>
  );
};
